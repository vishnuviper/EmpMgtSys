import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/feb9/employees';
const login_URL='http://localhost:8080/feb9/employee_login';
class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    login(employeeLogin){
        return axios.post(login_URL,employeeLogin)
    }
    
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    
}

export default new EmployeeService();