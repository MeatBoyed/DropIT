import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReturnedError, Error, ClientProfileModel } from './Interfaces';

export const useFetchClientProfile = (profileTitle: string) => {
  const [profileLoading, setProfileLoading] = useState<boolean>(true);
  const [profileError, setProfileError] = useState<Error>({ isError: false, message: '' });
  const [clientProfile, setClientProfile] = useState<ClientProfileModel>({
    title: '',
    location: '',
    description: '',
    socialMedia: [{ accountName: '', link: '' }],
    images: {
      bannerImage: '',
      profileImage: '',
    },
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:5000/client-profile`,
      params: { title: profileTitle },
    })
      .then((response) => {
        console.log(response);
        setClientProfile({
          title: response.data[0].title,
          location: response.data[0].location,
          description: response.data[0].description,
          socialMedia: response.data[0].socialMedia,
          images: response.data[0].images,
        });
        setProfileLoading(false);
      })
      .catch((ResError) => {
        try {
          const error: ReturnedError = ResError.response.data;

          switch (error.status) {
            case 404:
              setProfileError({ isError: true, message: "The product you're looking for doesn't seem to exist" });
              break;
            case 400:
              setProfileError({ isError: true, message: 'An unexpected error occured' });
          }
        } catch (error) {
          setProfileError({
            isError: true,
            message: 'An unexpected error occured. Please check you internet connection and try again',
          });
        }
        setProfileLoading(false);
      });
  }, [profileTitle]);

  return { profileLoading, profileError, clientProfile };
};
