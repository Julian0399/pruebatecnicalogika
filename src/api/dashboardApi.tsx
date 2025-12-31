
export async function dashboardAdmin() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No auth token found");
    }
    const URL = "https://dev.api.bekindnetwork.com/api/v1/actions/admin-list?pageNumber=1&pageSize=10"


    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("dashboardAdmin error:", error);
    throw error;
  }
}
