import React from 'react';

import { useFetchClientProfile } from '../Utils/useFetchClientProfile';

// SocialMedia Icons
import { useLocation } from 'react-router';
import { LoadingSpinner } from '../LoadingSpinner';
import { ProfileProducts } from './ProfileProducts';

const Alert = React.lazy(() => import("../Utils/Alert"))
const  Header = React.lazy(() => import("./ProfileHeader"));

// TODO Ensure social media icons are the correct size

export const ClientProfilePageIndex: React.FC = () => {
  const location = useLocation();
  const clientTitle = location.pathname.replaceAll('/', '');

  const { loading, profileError, clientProfile } = useFetchClientProfile(clientTitle);

  return (
    <section id="ClientProfileSection">
      {loading ? (
        <div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
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
