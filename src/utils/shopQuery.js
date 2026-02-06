async function fetchData() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { fetchData };
