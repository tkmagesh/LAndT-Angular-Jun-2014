using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApIDemo.Models;
using WebApIDemo.Repository;

namespace WebApIDemo.Controllers
{
    public class ProductsController : ApiController
    {
        ProductRepository repository; 
        public ProductsController()
        {
            this.repository = new ProductRepository();
        }
        
        [HttpGet]
        public Product[] GetAll()
        {
            return this.repository.GetAll();
        }

        [HttpGet]
        public Product GetById(int id)
        {
            return this.repository.GetById(id);
        }

        [HttpPost]
        public HttpResponseMessage Add(Product product) {
            
            var newProduct = this.repository.Add(product.name, product.cost, product.category);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);
            response.StatusCode = HttpStatusCode.Created;
            string uri = Url.Link("DefaultApi", new { id = newProduct.id });
            response.Headers.Location = new Uri(uri);
            return response;



        }
    }
}
