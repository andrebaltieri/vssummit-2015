using System.Collections.Generic;
using Abt.Models;
using Abt.Data;
using System.Linq;
using Abt.Repositories.Contracts;

namespace Abt.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly AbtDataContext _db = new AbtDataContext();
		
        public IEnumerable<Student> Get()
        {
            return _db.Students.AsEnumerable();
        }

        public Student Get(int id)
        {
            return _db.Students.Where(x => x.Id == id).FirstOrDefault();
        }

        public void Post(Student entity)
        {
            _db.Students.Add(entity);
            _db.SaveChanges();
        }

        public void Update(Student entity)
        {
            _db.Entry<Student>(entity).State = Microsoft.Data.Entity.EntityState.Modified;
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            var student = _db.Students.Where(x => x.Id == id).FirstOrDefault();
            _db.Students.Remove(student);
            _db.SaveChanges();
        }
	}
}