import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import "./AdminDonatePage.css";

const AdminDonatePage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch('/donations');
      if (!response.ok) throw new Error('Failed to fetch donations');
      const data = await response.json();
      setDonations(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Calculate summary statistics
  const getTotalDonations = () => donations.reduce((sum, d) => sum + d.amount, 0);
  const getUniqueSponsors = () => new Set(donations.map(d => d.donorEmail)).size;
  const getAverageDonation = () => getTotalDonations() / donations.length || 0;

  if (loading) return <div className="loading-state">Loading donations data...</div>;
  if (error) return <div className="error-state">Error: {error}</div>;

  return (
    <div className="admin-page-container">
      <Header />
      
      <div className="admin-content-wrapper">
        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">
            <div className="card-icon">
              <DollarSign className="h-6 w-6 text-blue-500" />
            </div>
            <div className="card-content">
              <h3>Total Donations</h3>
              <p>${getTotalDonations().toLocaleString()}</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="card-icon">
              <Users className="h-6 w-6 text-green-500" />
            </div>
            <div className="card-content">
              <h3>Unique Sponsors</h3>
              <p>{getUniqueSponsors()}</p>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="card-icon">
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
            <div className="card-content">
              <h3>Average Donation</h3>
              <p>${getAverageDonation().toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Donations List */}
        <div className="donations-list-section">
          <h2>Recent Donations</h2>
          <div className="donations-list">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Donor</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {[...donations]
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((donation, index) => (
                    <tr key={index}>
                      <td>{new Date(donation.date).toLocaleDateString()}</td>
                      <td>{donation.donorName}</td>
                      <td>{donation.category || 'General'}</td>
                      <td>${donation.amount.toLocaleString()}</td>
                      <td>{donation.donationType || 'One-time'}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDonatePage;