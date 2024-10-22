import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";
import "./AdminDonatePage.css";

const AdminDonatePage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('month'); // 'week', 'month', 'year'

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

  // Prepare data for the chart
  const prepareChartData = () => {
    const groupedData = donations.reduce((acc, donation) => {
      const date = new Date(donation.date);
      let key;
      
      switch(timeframe) {
        case 'week':
          key = date.toISOString().slice(0, 10); // Daily for week view
          break;
        case 'year':
          key = date.toISOString().slice(0, 7); // Monthly for year view
          break;
        default: // month
          key = date.toISOString().slice(0, 10); // Daily for month view
      }

      if (!acc[key]) {
        acc[key] = {
          date: key,
          total: 0,
          count: 0
        };
      }
      acc[key].total += donation.amount;
      acc[key].count += 1;
      return acc;
    }, {});

    return Object.values(groupedData).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

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

        {/* Chart Section */}
        <div className="chart-section">
          <div className="chart-header">
            <h2>Donation Trends</h2>
            <div className="timeframe-selector">
              <button
                className={`timeframe-button ${timeframe === 'week' ? 'active' : ''}`}
                onClick={() => setTimeframe('week')}
              >
                Week
              </button>
              <button
                className={`timeframe-button ${timeframe === 'month' ? 'active' : ''}`}
                onClick={() => setTimeframe('month')}
              >
                Month
              </button>
              <button
                className={`timeframe-button ${timeframe === 'year' ? 'active' : ''}`}
                onClick={() => setTimeframe('year')}
              >
                Year
              </button>
            </div>
          </div>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={prepareChartData()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#2563eb" name="Total Donations ($)" />
                <Line type="monotone" dataKey="count" stroke="#7c3aed" name="Number of Donations" />
              </LineChart>
            </ResponsiveContainer>
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