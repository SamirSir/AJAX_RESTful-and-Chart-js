# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create order seed in 
Order.create(name: "French Fries", drink: "Coffee")

order_list = [["Chowmin", "Coke"], ["Momo", "Sprite"], ["Naan", "Tea"]]
order_list.each do |name, drink|
    Order.create(name: name, drink: drink)
end


# for Worldcup model
worldcup = [["Brazil", 5, 7], ["Germany", 4, 8], ["Italy", 4, 6], ["Argentina", 2, 5], ["France", 2, 3], ["Urugay", 2, 2], ["England", 1, 1], ["Spain", 1, 1], ["Netherland", 0, 3], ["Czech Republic", 0, 2], ["Hungary", 0, 2], ["Sweden", 0, 1], ["Croatia", 0, 1]]

worldcup.each do |country, title, final|
    Worldcup.create(country: country, won: title, final: final)
end


# for VIsit Record

Visit.delete_all
Visit.create  country: 'United States', visited_at: DateTime.now, load_time: 3.5
Visit.create  country: 'United States', visited_at: DateTime.now, load_time: 1.5
Visit.create  country: 'United States', visited_at: DateTime.now, load_time: 1.0
Visit.create  country: 'United States', visited_at: DateTime.now - 1.day, load_time: 4.5
Visit.create  country: 'United States', visited_at: DateTime.now - 1.day, load_time: 4.0
Visit.create  country: 'United States', visited_at: DateTime.now - 2.days, load_time: 3.5
Visit.create  country: 'United States', visited_at: DateTime.now - 2.days, load_time: 1.0
Visit.create  country: 'United States', visited_at: DateTime.now - 2.days, load_time: 3.5
Visit.create  country: 'United States', visited_at: DateTime.now - 3.days, load_time: 4.5
Visit.create  country: 'United States', visited_at: DateTime.now - 3.days, load_time: 3.0
Visit.create  country: 'Germany', visited_at: DateTime.now, load_time: 1.0
Visit.create  country: 'Germany', visited_at: DateTime.now, load_time: 2.0
Visit.create  country: 'Germany', visited_at: DateTime.now, load_time: 1.0
Visit.create  country: 'Germany', visited_at: DateTime.now, load_time: 3.0
Visit.create  country: 'Germany', visited_at: DateTime.now - 1.day, load_time: 4.0
Visit.create  country: 'Germany', visited_at: DateTime.now - 2.days, load_time: 2.0
Visit.create  country: 'Germany', visited_at: DateTime.now - 2.days, load_time: 1.0
Visit.create  country: 'Germany', visited_at: DateTime.now - 2.days, load_time: 3.0
Visit.create  country: 'Germany', visited_at: DateTime.now - 3.days, load_time: 3.5
Visit.create  country: 'South Korea', visited_at: DateTime.now, load_time: 2.0
Visit.create  country: 'South Korea', visited_at: DateTime.now, load_time: 2.5
Visit.create  country: 'South Korea', visited_at: DateTime.now, load_time: 1.0
Visit.create  country: 'South Korea', visited_at: DateTime.now, load_time: 1.5
Visit.create  country: 'South Korea', visited_at: DateTime.now - 1.day, load_time: 2.5
Visit.create  country: 'South Korea', visited_at: DateTime.now - 1.day, load_time: 4.0
Visit.create  country: 'South Korea', visited_at: DateTime.now - 1.day, load_time: 3.0
Visit.create  country: 'South Korea', visited_at: DateTime.now - 2.days, load_time: 1.0
Visit.create  country: 'South Korea', visited_at: DateTime.now - 3.days, load_time: 5.0
Visit.create  country: 'South Korea', visited_at: DateTime.now - 3.days, load_time: 4.0
Visit.create  country: 'South Korea', visited_at: DateTime.now - 3.days, load_time: 5.0





