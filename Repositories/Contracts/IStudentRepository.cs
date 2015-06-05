using System.Collections.Generic;
using Abt.Models;

namespace Abt.Repositories.Contracts
{
    public interface IStudentRepository
    {
        IEnumerable<Student> Get();
        Student Get(int id);
        void Post(Student entity);
        void Update(Student entity);
        void Delete(int id);
    }
}