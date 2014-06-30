using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApIDemo.Models;

namespace WebApIDemo.Repository
{
    public class ProductRepository
    {
        System.Data.Entity.DbSet<Product> _products;
        LAndTDbEntities entities;
        public ProductRepository()
        {
            entities = new LAndTDbEntities();
            _products = entities.Products;
        }

        public Product Add(string name, decimal? cost, int? category)
        {
            
            //var newId = _products.Any() ? _products.Max(p => p.id) + 1 : 1;
            var newProduct = new Product
            {
                name = name,
                cost = cost,
                category = category
            };
            var product = _products.Add(newProduct);
            entities.SaveChanges();
            return product;
        }

        public Product[] GetAll()
        {
            return _products.ToArray();
        }

        public Product GetById(int id)
        {
            return _products.FirstOrDefault(p => p.id == id);
        }
    }
}