import { apiCall } from "@/config/constants";

export default async function Home() {
  const response = await apiCall('/get-home-content')
  const homeData = response?.data?.[0];
  return (
    homeData ? <h1>Welcome</h1> : <h1>Error</h1>
  );
}
