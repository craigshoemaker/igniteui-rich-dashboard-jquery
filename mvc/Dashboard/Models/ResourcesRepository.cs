using System.Collections.Generic;
using System.Linq;

namespace Dashboard.Models
{
    public class ResourcesRepository
    {
        public List<Employee> GetAll()
        {
            List<Employee> employees = new List<Employee>();
            Employee employee;

            employee = new Employee() { 
                id = "0000009",
                fullName = "Tyler Martinez"  
            };
            employee.hours.Add(new HoursData { worked = 10, planned = 15, other = 0, overtime = 0, total = 40 });
            employee.hours.Add(new HoursData { worked = 20, planned = 20, other = 0, overtime = 0, total = 40 });
            employees.Add(employee);

            employee = new Employee()
            {
                id = "0000007",
                fullName = "Zoey Walters"
            };
            employee.hours.Add(new HoursData { worked = 33, planned = 40, other = 0, overtime = 0, total = 40 });
            employee.hours.Add(new HoursData { worked = 40, planned = 40, other = 0, overtime = 0, total = 40 });
            employees.Add(employee);

            employee = new Employee()
            {
                id = "0000008",
                fullName = "Jacob Johnson"
            };
            employee.hours.Add(new HoursData { worked = 4, planned = 4, other = 0, overtime = 0, total = 40 });
            employee.hours.Add(new HoursData { worked = 15, planned = 30, other = 0, overtime = 0, total = 40 });
            employees.Add(employee);

            employee = new Employee()
            {
                id = "0000002",
                fullName = "Zachary Swenson"
            };
            employee.hours.Add(new HoursData { worked = 22, planned = 35, other = 0, overtime = 0, total = 40 });
            employee.hours.Add(new HoursData { worked = 22, planned = 40, other = 0, overtime = 0, total = 40 });
            employees.Add(employee);

            employee = new Employee()
            {
                id = "0000022",
                fullName = "Alexis Potts"
            };
            employee.hours.Add(new HoursData { worked = 20, planned = 20, other = 0, overtime = 0, total = 40 });
            employee.hours.Add(new HoursData { worked = 35, planned = 35, other = 0, overtime = 0, total = 40 });
            employees.Add(employee);

            return employees;
        }
    }
}