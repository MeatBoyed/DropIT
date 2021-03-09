const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientProfileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    socialMedia: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    images: {
      bannerImage: {
        type: String,
        required: true,
      },
      profileImage: {
        type: String,
        required: true,
      },
    },
  },
  { collection: 'Client-Profiles', timestamps: true }
);

const ClientProfiles = mongoose.model('ClientProfile', clientProfileSchema);
modules.exports = ClientProfiles;
