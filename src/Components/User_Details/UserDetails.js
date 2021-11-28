import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { fetchTripsByID } from '../../apiCalls';
// import { getWeather } from '../../apiCalls';
import { filterData } from '../../utils';
import './UserDetails.css';

export const UserDetails = ({ traveler }) => {
  const { id, name, travelerType } = traveler;

  const [tripPending, setTripPending] = useState({});
  const [error, setError] = useState('');
  // const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTrips = () => {
      fetchTripsByID(id)
        // .then((data) => console.log(data))
        .then((data) => {
          setTripPending(filterData.getUpcomingTrip(data.requestedTrips));
          setIsLoading(false);
        })
        .catch((error) => setError(error.message));
    };
    getTrips();
  }, [id]);

  return (
    <React.Fragment>
      {!isLoading && !error && (
        <section className="userDetails">
          <h3 className="userName">Welcome {name}</h3>
          <h4 className="travelerType">Traveler Type: {travelerType}</h4>
          <h4>Your Next Trip</h4>
          {tripPending !== undefined ? (
            <React.Fragment>
              <div className="upcomingTripWrapper">
                <div className="upcomingTripImageWrapper">
                  <img
                    className="destinationImage"
                    src={tripPending.place.image}
                    alt={tripPending.place.alt}
                  />
                </div>
                <article className="tripDetails">
                  <p>{tripPending.place.destination}</p>
                  <p>Departing: {dayjs(tripPending.date).format('M/D/YYYY')}</p>

                  <p>Trip Duration: {tripPending.duration} Days</p>
                  <p>Travelers: {tripPending.travelers}</p>
                </article>
              </div>
              <h4 className="preparations">Prepare For Your Upcoming Trip</h4>
              <ul>
                <li>
                  <a
                    href={`https://www.google.com/search?q=best+restaurants+in+moscow&sxsrf=AOaemvLBnUQgEgqaayu1iRqapFkOSQRVOg%3A1638044260473&ei=ZJKiYdiRHMy7qtsPxNKY2AI&ved=0ahUKEwjY05Wyrrn0AhXMnWoFHUQpBisQ4dUDCA4&uact=5&oq=best+restaurants+in+${tripPending.destination}&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOhAILhDHARCjAhDIAxCwAxBDOgsIABCABBCxAxDJAzoFCAAQkgM6CAgAEIAEELEDSgUIPBIBMkoECEEYAEoECEYYAFDHCVjuOmCVP2gCcAJ4AIAB1QSIAfAOkgEJNi4zLjQtMS4xmAEAoAEByAEOwAEB&sclient=gws-wiz`}
                  >
                    Dining
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.google.com/search?q=entertainment+in+moscow&sxsrf=AOaemvLBnUQgEgqaayu1iRqapFkOSQRVOg%3A1638044260473&ei=ZJKiYdiRHMy7qtsPxNKY2AI&ved=0ahUKEwjY05Wyrrn0AhXMnWoFHUQpBisQ4dUDCA4&uact=5&oq=best+restaurants+in+${tripPending.destination}&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOhAILhDHARCjAhDIAxCwAxBDOgsIABCABBCxAxDJAzoFCAAQkgM6CAgAEIAEELEDSgUIPBIBMkoECEEYAEoECEYYAFDHCVjuOmCVP2gCcAJ4AIAB1QSIAfAOkgEJNi4zLjQtMS4xmAEAoAEByAEOwAEB&sclient=gws-wiz`}
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.google.com/search?q=weather+in+moscow&sxsrf=AOaemvLBnUQgEgqaayu1iRqapFkOSQRVOg%3A1638044260473&ei=ZJKiYdiRHMy7qtsPxNKY2AI&ved=0ahUKEwjY05Wyrrn0AhXMnWoFHUQpBisQ4dUDCA4&uact=5&oq=best+restaurants+in+${tripPending.destination}&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOhAILhDHARCjAhDIAxCwAxBDOgsIABCABBCxAxDJAzoFCAAQkgM6CAgAEIAEELEDSgUIPBIBMkoECEEYAEoECEYYAFDHCVjuOmCVP2gCcAJ4AIAB1QSIAfAOkgEJNi4zLjQtMS4xmAEAoAEByAEOwAEB&sclient=gws-wiz`}
                  >
                    Weather
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.google.com/search?q=suggested+activities+for+${travelerType}+in+moscow&sxsrf=AOaemvLBnUQgEgqaayu1iRqapFkOSQRVOg%3A1638044260473&ei=ZJKiYdiRHMy7qtsPxNKY2AI&ved=0ahUKEwjY05Wyrrn0AhXMnWoFHUQpBisQ4dUDCA4&uact=5&oq=best+restaurants+in+${tripPending.destination}&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOhAILhDHARCjAhDIAxCwAxBDOgsIABCABBCxAxDJAzoFCAAQkgM6CAgAEIAEELEDSgUIPBIBMkoECEEYAEoECEYYAFDHCVjuOmCVP2gCcAJ4AIAB1QSIAfAOkgEJNi4zLjQtMS4xmAEAoAEByAEOwAEB&sclient=gws-wiz`}
                  >
                    Suggested Activities for {travelerType}
                  </a>
                </li>
              </ul>
            </React.Fragment>
          ) : (
            <p>You do not have any approved upcoming trips.</p>
          )}
        </section>
      )}
      {isLoading && !error && <p>Loading User Data...</p>}
      {error && <ErrorMessage message={error} />}
    </React.Fragment>
  );
};
