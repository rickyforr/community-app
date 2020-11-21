import Axios from "axios";

/**
 * Fetches app data from the api. Calls hooks to update pending, success and failure states.
 *
 * @param setPending
 * @param onSuccess
 * @param onFailure
 * @param url
 */
export const fetchData = async (
  setPending: (value: React.SetStateAction<boolean>) => void,
  onSuccess: (value: React.SetStateAction<any[]>) => void,
  onFailure: (error: string) => void,
  url: string
) => {
  setPending(true);
  await Axios.get(url)
    .then(function (response) {
      onSuccess(response.data);
      setPending(false);
    })
    .catch(function () {
      onFailure("Sorry! There was an error loading data.");
      setPending(false);
    });
};
