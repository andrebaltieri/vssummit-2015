using System;
using System.Linq;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using Abt.Repositories.Contracts;
using Abt.Models;

namespace Abt.Controllers
{
    [Route("api/students")]
    public class StudentController
    {
        private IStudentRepository _repository;

        public StudentController(IStudentRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return _repository.Get();
        }

        [HttpGet("{id}")]
        public Student Get(int id)
        {
            return _repository.Get(id);
        }

        [HttpPost]
        public Student Post([FromBody]Student model)
        {
			_repository.Post(model);
            return model;
        }

        [HttpPut("{id}")]
        public Student Put(int id, [FromBody]Student model)
        {
            _repository.Update(model);
            return model;
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            _repository.Delete(id);
            return "Aluno excluído com sucesso";
        }
    }

}