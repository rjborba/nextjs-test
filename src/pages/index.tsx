import { OramaSearchBox, OramaSearchButton } from "@orama/react-components";

const API_KEY = ">>>STEUP YOUR API KEY<<<";
const ENDPOINT = ">>>STEUP YOUR ENDPOINT<<<";

export default function Home() {
  return (
    <>
      <div>
        <OramaSearchButton />
        <OramaSearchBox
          index={{
            api_key: API_KEY,
            endpoint: ENDPOINT,
          }}
        />
      </div>
    </>
  );
}
