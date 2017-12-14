10.times do
  Blog.create(
    name: Faker::TheFreshPrinceOfBelAir.celebrity,
    author: Faker::TheFreshPrinceOfBelAir.character,
    content: Faker::TheFreshPrinceOfBelAir.quote,
  )
end