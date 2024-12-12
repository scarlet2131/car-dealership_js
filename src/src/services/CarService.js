const API_BASE_URL = 'http://localhost:5000/api'; // Backend API URL

export const fetchCars = async (brand = '', page = 1, limit = 5) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cars?brand=${brand}&page=${page}&limit=${limit}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return { data: [], total: 0, currentPage: 1, totalPages: 1 };
    }
};
