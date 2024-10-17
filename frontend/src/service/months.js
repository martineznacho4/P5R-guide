import axios from "axios";

const baseURL = "http://localhost:3001/api";

const getAllMonths = () => {
	const request = axios.get(`${baseURL}/months`);
	return request.then((response) => response.data);
};

const getMonth = (month) => {
	const request = axios.get(`${baseURL}/${month}`);
	return request.then((response) => response.data);
};

const getMonthByID = (id) => {
	const request = axios.get(`${baseURL}/month/${id}`);
	return request.then((response) => response.data);
}

export default {getAllMonths, getMonth, getMonthByID}