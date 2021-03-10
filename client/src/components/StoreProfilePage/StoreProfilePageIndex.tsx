import React from 'react';

import { useFetchClientProfile } from '../Utils/useFetchClientProfile';

// SocialMedia Icons
import { useLocation } from 'react-router';
import { LoadingSpinner } from '../LoadingSpinner';
import { Alert } from '../Utils/Alert';
import { Header } from './ProfileHeader';
import { ProfileProducts } from './ProfileProducts';

// TODO Ensure social media icons are the correct size

export const ClientProfilePageIndex: React.FC = () => {
  const location = useLocation();
  const clientTitle = location.pathname.replaceAll('/', '');

  const { profileLoading, profileError, clientProfile } = useFetchClientProfile(clientTitle);

  return (
    <section id="ClientProfileSection">
      {profileLoading ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          {profileError.isError ? (
            <Alert message={profileError.message} returnHome={true} />
          ) : (
            <React.Fragment>
              <Header
                title={clientProfile.title}
                location={clientProfile.location}
                socialMedia={clientProfile.socialMedia}
                images={clientProfile.images}
              />
              <div id="ProfileDescriptionContainer">
                <p className="descriptionText">{clientProfile.description}</p>
              </div>
              <ProfileProducts profileTitle={clientTitle} />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </section>
  );
};

export default ClientProfilePageIndex;
