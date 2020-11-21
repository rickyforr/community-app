import Axios from "axios";

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
