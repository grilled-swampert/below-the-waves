const express = require('express');
const router = express.Router();

import * as campaignControllers from '../../controllers/campaign/campaignControllers';
import * as donationControllers from '../../controllers/donations/donationsControllers';
import * as fundraiserControllers from '../../controllers/fundraisers/fundraiserControllers';
import * as newsControllers from '../../controllers/news/newsControllers';
import * as workControllers from '../../controllers/work/workControllers';

// Campaign routes
router.get('/campaigns', campaignControllers.getCampaigns);
router.post('/campaigns', campaignControllers.createCampaign);
router.delete('/campaigns/:id', campaignControllers.deleteCampaign);

// Donation routes
router.get('/donations', donationControllers.getDonations);
router.post('/donations', donationControllers.createDonation);
router.delete('/donations/:id', donationControllers.deleteDonation);

// Fundraiser routes
router.get('/fundraisers', fundraiserControllers.getFundraisers);
router.post('/fundraisers', fundraiserControllers.createFundraiser);
router.delete('/fundraisers/:id', fundraiserControllers.deleteFundraiser);

// News routes
router.get('/news', newsControllers.getNews);
router.post('/news', newsControllers.createNews);
router.delete('/news/:id', newsControllers.deleteNews);

// Work routes
router.get('/work', workControllers.getWork);
router.post('/work', workControllers.createWork);
router.delete('/work/:id', workControllers.deleteWork);

module.exports = router;
