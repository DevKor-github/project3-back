import axios from "axios";
export let coordinates: { lat: number; lng: number } | undefined;
const form = document.querySelector("form")!;
const aaddressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCsYyne26q_Zhs3Wvayw2qhJ6nyQMDlNU4";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = aaddressInput.value;

  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

form.addEventListener("submit", searchAddressHandler);
type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: "OK" | "ZERO_RESULTS";
  };
  const enteredAddress = aaddressInput.value;
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("지역을 찾을 수 없습니다.");
      }
      
      coordinates = res.data.results[0].geometry.location;//좌표 저장
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });