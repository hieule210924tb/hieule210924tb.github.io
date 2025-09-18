let defaultUsers = [
  {
    id: 1,
    first_name: "Lorilee",
    last_name: "Adame",
    email: "ladame0@guardian.co.uk",
    password: "12345678",
  },
  {
    id: 2,
    first_name: "Gannon",
    last_name: "Manwell",
    email: "gmanwell1@naver.com",
    password: "12345678",
  },
  {
    id: 3,
    first_name: "Christiana",
    last_name: "Dowtry",
    email: "cdowtry2@mapy.cz",
    password: "12345678",
  },
  {
    id: 4,
    first_name: "Warden",
    last_name: "Ansteys",
    email: "wansteys3@yahoo.com",
    password: "12345678",
  },
  {
    id: 5,
    first_name: "Claybourne",
    last_name: "Barbosa",
    email: "cbarbosa4@si.edu",
    password: "12345678",
  },
  {
    id: 6,
    first_name: "Zita",
    last_name: "Triner",
    email: "ztriner5@youku.com",
    password: "12345678",
  },
  {
    id: 7,
    first_name: "Orsa",
    last_name: "Pilcher",
    email: "opilcher6@surveymonkey.com",
    password: "12345678",
  },
  {
    id: 8,
    first_name: "Lyn",
    last_name: "Fockes",
    email: "lfockes7@answers.com",
    password: "12345678",
  },
  {
    id: 9,
    first_name: "Harv",
    last_name: "Olifaunt",
    email: "holifaunt8@jalbum.net",
    password: "12345678",
  },
  {
    id: 10,
    first_name: "Nikita",
    last_name: "Duncanson",
    email: "nduncanson9@harvard.edu",
    password: "12345678",
  },
];

let posts = [
  {
    id: 1,
    title: "Plover, blacksmith",
    content:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 9,
    created_at: "2022-01-06",
    updated_at: "2022-10-03",
  },
  {
    id: 2,
    title: "King cormorant",
    content:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 8,
    created_at: "2022-04-17",
    updated_at: "2022-10-02",
  },
  {
    id: 3,
    title: "Squirrel glider",
    content:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 2,
    created_at: "2022-05-01",
    updated_at: "2022-10-02",
  },
  {
    id: 4,
    title: "Mynah, common",
    content:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 2,
    created_at: "2022-03-29",
    updated_at: "2022-10-06",
  },
  {
    id: 5,
    title: "Ocelot",
    content:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 4,
    created_at: "2022-04-01",
    updated_at: "2022-10-02",
  },
  {
    id: 6,
    title: "Mockingbird, galapagos",
    content:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 2,
    created_at: "2022-09-18",
    updated_at: "2022-10-03",
  },
  {
    id: 7,
    title: "Cape Barren goose",
    content:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 4,
    created_at: "2022-04-28",
    updated_at: "2022-10-02",
  },
  {
    id: 8,
    title: "Godwit, hudsonian",
    content:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 8,
    created_at: "2022-05-23",
    updated_at: "2022-10-06",
  },
  {
    id: 9,
    title: "Jackrabbit, white-tailed",
    content:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 3,
    created_at: "2022-05-07",
    updated_at: "2022-10-04",
  },
  {
    id: 10,
    title: "Stork, jabiru",
    content:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 10,
    created_at: "2022-02-10",
    updated_at: "2022-10-04",
  },
  {
    id: 11,
    title: "Giant armadillo",
    content: "Quisque ut erat.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 2,
    created_at: "2022-06-01",
    updated_at: "2022-10-03",
  },
  {
    id: 12,
    title: "Constrictor, eastern boa",
    content:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 2,
    created_at: "2022-05-07",
    updated_at: "2022-10-05",
  },
  {
    id: 13,
    title: "Lark, horned",
    content:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 5,
    created_at: "2022-08-13",
    updated_at: "2022-10-04",
  },
  {
    id: 14,
    title: "Squirrel, eastern fox",
    content:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 10,
    created_at: "2022-09-09",
    updated_at: "2022-10-03",
  },
  {
    id: 15,
    title: "Oryx, fringe-eared",
    content:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 3,
    created_at: "2022-09-27",
    updated_at: "2022-10-07",
  },
  {
    id: 16,
    title: "Ring-tailed possum",
    content:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 2,
    created_at: "2022-01-14",
    updated_at: "2022-10-04",
  },
  {
    id: 17,
    title: "Rabbit, eastern cottontail",
    content:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 9,
    created_at: "2022-03-23",
    updated_at: "2022-10-07",
  },
  {
    id: 18,
    title: "Spotted deer",
    content:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 9,
    created_at: "2022-04-12",
    updated_at: "2022-10-07",
  },
  {
    id: 19,
    title: "Blackbuck",
    content:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 7,
    created_at: "2022-05-08",
    updated_at: "2022-10-05",
  },
  {
    id: 20,
    title: "Crow, house",
    content:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 5,
    created_at: "2022-01-03",
    updated_at: "2022-10-04",
  },
  {
    id: 21,
    title: "Western grey kangaroo",
    content:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 6,
    created_at: "2022-06-05",
    updated_at: "2022-10-07",
  },
  {
    id: 22,
    title: "Iguana, land",
    content:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 2,
    created_at: "2022-06-26",
    updated_at: "2022-10-07",
  },
  {
    id: 23,
    title: "Pelican, great white",
    content:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 7,
    created_at: "2022-07-16",
    updated_at: "2022-10-03",
  },
  {
    id: 24,
    title: "Lechwe, kafue flats",
    content:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 9,
    created_at: "2022-03-04",
    updated_at: "2022-10-07",
  },
  {
    id: 25,
    title: "Red-knobbed coot",
    content:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 10,
    created_at: "2022-01-01",
    updated_at: "2022-10-04",
  },
  {
    id: 26,
    title: "Porcupine, prehensile-tailed",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 4,
    created_at: "2022-08-01",
    updated_at: "2022-10-05",
  },
  {
    id: 27,
    title: "Gambel's quail",
    content:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 5,
    created_at: "2022-02-11",
    updated_at: "2022-10-07",
  },
  {
    id: 28,
    title: "Chuckwalla",
    content:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 7,
    created_at: "2022-09-19",
    updated_at: "2022-10-06",
  },
  {
    id: 29,
    title: "Red-billed tropic bird",
    content:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 3,
    created_at: "2022-01-17",
    updated_at: "2022-10-03",
  },
  {
    id: 30,
    title: "Southern lapwing",
    content:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 8,
    created_at: "2022-05-08",
    updated_at: "2022-10-06",
  },
  {
    id: 31,
    title: "Long-tailed jaeger",
    content:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 10,
    created_at: "2022-06-06",
    updated_at: "2022-10-06",
  },
  {
    id: 32,
    title: "Jaguarundi",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 8,
    created_at: "2022-04-30",
    updated_at: "2022-10-04",
  },
  {
    id: 33,
    title: "African wild cat",
    content:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 5,
    created_at: "2022-06-18",
    updated_at: "2022-10-05",
  },
  {
    id: 34,
    title: "Blue shark",
    content:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    user_id: 10,
    created_at: "2022-04-08",
    updated_at: "2022-10-03",
  },
  {
    id: 35,
    title: "Western lowland gorilla",
    content:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 8,
    created_at: "2022-04-15",
    updated_at: "2022-10-04",
  },
  {
    id: 36,
    title: "Heron, green",
    content:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 10,
    created_at: "2022-06-15",
    updated_at: "2022-10-06",
  },
  {
    id: 37,
    title: "Admiral, indian red",
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 3,
    created_at: "2022-01-09",
    updated_at: "2022-10-06",
  },
  {
    id: 38,
    title: "Mockingbird, galapagos",
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 4,
    created_at: "2022-06-06",
    updated_at: "2022-10-05",
  },
  {
    id: 39,
    title: "Orca",
    content:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 3,
    created_at: "2022-04-01",
    updated_at: "2022-10-06",
  },
  {
    id: 40,
    title: "Baboon, olive",
    content:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 9,
    created_at: "2022-09-03",
    updated_at: "2022-10-04",
  },
  {
    id: 41,
    title: "Caiman, spectacled",
    content:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 8,
    created_at: "2022-04-22",
    updated_at: "2022-10-03",
  },
  {
    id: 42,
    title: "Sheep, stone",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 10,
    created_at: "2022-07-11",
    updated_at: "2022-10-06",
  },
  {
    id: 43,
    title: "Macaw, scarlet",
    content: "In hac habitasse platea dictumst.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 4,
    created_at: "2022-03-30",
    updated_at: "2022-10-07",
  },
  {
    id: 44,
    title: "Long-billed corella",
    content:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 7,
    created_at: "2022-02-18",
    updated_at: "2022-10-06",
  },
  {
    id: 45,
    title: "Snake, tiger",
    content:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 7,
    created_at: "2022-04-02",
    updated_at: "2022-10-03",
  },
  {
    id: 46,
    title: "Red-tailed hawk",
    content:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    user_id: 2,
    created_at: "2022-03-15",
    updated_at: "2022-10-04",
  },
  {
    id: 47,
    title: "Booby, masked",
    content:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 8,
    created_at: "2022-08-05",
    updated_at: "2022-10-02",
  },
  {
    id: 48,
    title: "Red-necked phalarope",
    content:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    user_id: 5,
    created_at: "2022-09-09",
    updated_at: "2022-10-02",
  },
  {
    id: 49,
    title: "Bee-eater (unidentified)",
    content:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 4,
    created_at: "2022-02-11",
    updated_at: "2022-10-02",
  },
  {
    id: 50,
    title: "Red deer",
    content:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    user_id: 8,
    created_at: "2022-03-30",
    updated_at: "2022-10-07",
  },
];

//Xử lý active
const links = document.querySelectorAll("#menu a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    links.forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});
//scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("menu");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

//Nạp users từ localStorage nếu có
let users = JSON.parse(localStorage.getItem("users")) || defaultUsers;
// Hàm đổi nội dung
function showPage(page) {
  let content = document.getElementById("content");

  switch (page) {
    case "home":
      content.innerHTML = `<h2 class='mt-5'></h2><p>Chào mừng bạn đến với bài tập T3H .</p>`;
      break;
    case "login":
      content.innerHTML = `
        <p id="successLogin" class="text-center text-danger mt-5" ></p>
       <div class="container mt-5" style="max-width: 400px;">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Đăng nhập</h2>

            <div class="mb-3">
              <label for="loginEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email">
            </div>

            <div class="mb-3">
              <label for="loginPass" class="form-label">Mật khẩu</label>
              <input type="password" class="form-control" id="loginPass" placeholder="Nhập mật khẩu">
            </div>
            <p id="errorLogin" style="display: none"></p>
            <button onclick="handleLogin()" class="btn btn-primary w-100">Đăng nhập</button>
          </div>
        </div>
      </div>
      `;
      break;
    case "register":
      content.innerHTML = `
       <p class='mt-5' id="successRes" style ="display: none"></p>
       <div class="container mt-5" style="max-width: 450px;">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Đăng ký</h2>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="resFirst" class="form-label">First Name</label>
                <input type="text" class="form-control" id="resFirst" placeholder="Nhập tên">
              </div>
              <div class="col-md-6 mb-3">
                <label for="resLast" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="resLast" placeholder="Nhập họ">
              </div>
            </div>

            <div class="mb-3">
              <label for="resEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="resEmail" placeholder="Nhập email">
            </div>

            <div class="mb-3">
              <label for="resPass" class="form-label">Mật khẩu</label>
              <input type="password" class="form-control" id="resPass" placeholder="Nhập mật khẩu">
            </div>
             <div id="errorRes"></div>
            <button onclick="handleRegister()" class="btn btn-success w-100">Đăng ký</button>

            <p id="regMsg" class="text-center text-danger mt-3"></p>
          </div>
        </div>
      </div>
      `;
      break;
    case "users":
      content.innerHTML = `
        <table class="table table-hover" id="userList"></table>
        <h2 class='text-center mt-5'>Tìm kiếm Users</h2>
       <div class="container mt-4" style="max-width: 500px;">
          <div class="input-group">
            <input id="userKeyword" type="text" class="form-control" placeholder="Nhập từ khóa...">
            <button onclick="searchUsers(users)" class="btn btn-primary">Tìm kiếm</button>
          </div>
          <table class="table table-hover" id='viewSearch'></table>
      </div>
      `;
      // renderUsers(users);
      break;
    case "listPosts":
      content.innerHTML = `
        <h2 class="text-center mt-5">Danh sách Posts</h2>
        <div id="postList" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3"></div>
      `;
      renderPosts(posts);
      break;
    case "detailPosts":
      content.innerHTML = `
        <h2 class='text-center mt-5'>Tìm kiếm Post</h2>
       <div class="container mt-4" style="max-width: 500px;">
          <div class="input-group">
            <input id="postID" type="number" class="form-control" placeholder="Tìm kiếm theo Post qua ID">
            <button onclick="renderDetailPosts()" class="btn btn-primary">Tìm kiếm</button>
          </div>
        <div id='detailPostId'></div>
      </div>
      `;
      break;
    case "detailPostsUser":
      content.innerHTML = `
        <h2 class='text-center mt-5'>Tìm kiếm Post Email User</h2>
       <div class="container mt-4" style="max-width: 500px;">
          <div class="input-group">
            <input id="postEmailUser" type="text" class="form-control" placeholder="Tìm kiếm theo Post qua email user">
            <button onclick="handlePostEmail()" class="btn btn-primary">Tìm kiếm</button>
          </div>
        <div id='postEmail'></div>
      </div>
      `;
      break;
    default:
      content.innerHTML = `<h2>404 - Không tìm thấy trang</h2>`;
  }
}

//Đăng nhập
function handleLogin() {
  let emailLogin = document.getElementById("loginEmail").value.trim();
  let passLogin = document.getElementById("loginPass").value.trim();
  let successLogin = document.getElementById("successLogin");
  let errorLogin = document.getElementById("errorLogin");
  if (emailLogin === "" || passLogin === "") {
    errorLogin.innerHTML = `<div class="text-center text-warning mt-2 ">Vui lòng điền đầy đủ thông tin</div>`;
    errorLogin.style.display = "block";
    return;
  }
  let userInFo = users.find(
    (user) => user.email === emailLogin && user.password === passLogin
  );
  if (userInFo) {
    successLogin.innerHTML = `<div class="text-center text-success mt-2 ">Xin chào ${userInFo.first_name} ${userInFo.last_name}</div>`;
    errorLogin.style.display = "none";
  } else {
    errorLogin.innerHTML = `<div class="text-center text-warning mt-2 ">Thông tin tài khoản không chính xác </div>`;
    errorLogin.style.display = "block";
  }
}

//Đăng kí
function handleRegister() {
  let resFirst = document.getElementById("resFirst").value.trim();
  let resLast = document.getElementById("resLast").value.trim();
  let resEmail = document.getElementById("resEmail").value.trim();
  let resPass = document.getElementById("resPass").value.trim();
  let successRes = document.getElementById("successRes");
  let errorRes = document.getElementById("errorRes");
  if (resFirst === "" || resLast === "" || resEmail === "" || resPass === "") {
    errorRes.innerHTML = `<p class ="text-warning text-center">Vui lòng điền đầy đủ thông tin</p>`;
    return;
  }
  let checkEmai = users.some((e) => e.email === resEmail);
  if (checkEmai) {
    errorRes.innerHTML = `<p class ="text-warning text-center">Email đã tồn tại vui lòng nhập email khác</p>`;
    return;
  }
  let newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  let newUser = {
    id: newId,
    first_name: resFirst,
    last_name: resLast,
    email: resEmail,
    password: resPass,
  };
  users.push(newUser);
  successRes.innerHTML = `<p class ="text-success text-center">Đăng kí thành công</p>`;
  errorRes.style.display = "none";
  successRes.style.display = "block";
  localStorage.setItem("users", JSON.stringify(users));
  setTimeout(() => {
    showPage("users");
  }, 5000);
}
//Danh sách các users
// function renderUsers() {
//   if (!users || users.length === 0) {
//     document.getElementById("userList").innerHTML =
//       "<tr><td>Không có user nào</td></tr>";
//     return;
//   }
//   table = ` <tr class="table-success">
//                 <th scope="col">ID</th>
//                 <th scope="col">Fitst Name</th>
//                 <th scope="col">Last Name</th>
//                 <th scope="col">Email</th>
//                </tr>
//             `;
//   users.forEach((item) => {
//     return (table += `<tbody>
//            <tr >
//                 <th scope="row">${item.id}</th>
//                 <td>${item.first_name}</td>
//                 <td>${item.last_name}</td>
//                 <td>${item.email}</td>
//           </tr>
//            </tbody>
//           `);
//   });
//   document.getElementById("userList").innerHTML = table;
// }

//Tìm kiếm user
function searchUsers(users) {
  var inputSearch = document
    .getElementById("userKeyword")
    .value.trim()
    .toLowerCase();
  if (inputSearch === "") {
    table = `
       <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
    `;
    users.forEach((item) => {
      return (table += `<tbody>
           <tr>
                <th scope="row">${item.id}</th>
                <td>${item.first_name}</td>
                <td>${item.last_name}</td>
                <td>${item.email}</td>
          </tr> 
           </tbody>
          `);
    });
    document.getElementById("viewSearch").innerHTML = table;
  } else {
    //Tìm kiếm theo name
    const itemSearch = users.filter((u) =>
      u.first_name.toLowerCase().includes(inputSearch)
    );
    if (itemSearch.length === 0) {
      document.getElementById(
        "viewSearch"
      ).innerHTML = `Không tìm thấy kết quả`;
    } else {
      table = `
         <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
      `;
      itemSearch.forEach((item) => {
        return (table += `<tbody>
             <tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.first_name}</td>
                  <td>${item.last_name}</td>
                  <td>${item.email}</td>
            </tr>
             </tbody>
            `);
      });
      document.getElementById("viewSearch").innerHTML = table;
    }
  }
}
//Danh sách Post
function renderPosts(detailPosts) {
  let viewPost = `
      <table class="table table-bordered table-striped text-center  ">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Ngày tạo</th>
            <th>Người tạo</th>
          </tr>
        </thead>
        <tbody>
    `;

  detailPosts.forEach((post) => {
    // Tìm user theo user_id
    let user = users.find((u) => u.id === post.user_id);

    viewPost += `
        <tr>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.created_at}</td>
          <td>${user ? user.first_name + " " + user.last_name : "Không rõ"}</td>
        </tr>
      `;
  });

  viewPost += `</tbody></table>`;

  document.getElementById("postList").innerHTML = viewPost;
}

//Xem chi tiết Post
function renderDetailPosts() {
  var postId = parseInt(document.getElementById("postID").value.trim());
  let post = posts.find((p) => p.id == postId);
  if (isNaN(postId)) {
    document.getElementById("detailPostId").innerHTML =
      "<div class='text-center mt-3 text-danger'>Vui lòng nhập ID</div>";
    return;
  }
  if (!post) {
    document.getElementById("detailPostId").innerHTML =
      "<div class='text-center mt-3 text-danger'>Không tìm thấy ID</div>";
    return;
  }
  let user = users.find((u) => u.id == post.user_id);
  let detailHTML = `
     <div class="card mt-3 shadow border-0 rounded-3" 
     style="width: 30rem; transition: transform 0.3s ease, box-shadow 0.3s ease;"
     onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)';"
     onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='';">

      <img src="${post.image}" 
          class="card-img-top img-fluid" 
          alt="Ảnh post" 
          style="height: 220px; object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title text-primary fw-bold">${post.title}</h5>
        <p class="card-text text-muted">${post.content}</p>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID:</b> ${post.id}</li>
        <li class="list-group-item"><b>Tác giả:</b> ${
          user ? user.first_name + " " + user.last_name : "Không rõ"
        }</li>
        <li class="list-group-item"><b>Ngày tạo:</b> ${post.created_at}</li>
        <li class="list-group-item"><b>Ngày sửa đổi:</b> ${post.updated_at}</li>
      </ul>
    </div>

    `;
  document.getElementById("detailPostId").innerHTML = detailHTML;
}
//Xem post theo email user
function handlePostEmail() {
  var postEmailInput = document.getElementById("postEmailUser");
  var postEmailValue = postEmailInput.value.trim();
  let emailUser = users.find((u) => u.email == postEmailValue);
  if (postEmailValue === "") {
    document.getElementById("postEmail").innerHTML =
      "<div class='text-center mt-3 text-danger'>Vui lòng nhập email</div>";
    return;
  }
  if (!emailUser) {
    document.getElementById("postEmail").innerHTML =
      "<div class='text-center mt-3 text-danger'>Không tìm thấy kết quả</div>";
    return;
  }
  let listPostEmail = posts.filter(
    (listPost) => listPost.user_id == emailUser.id
  );
  if (listPostEmail.length === 0) {
    document.getElementById("postEmail").innerHTML = `
    <h5 class='mt-3 '>Kết quả: ${listPostEmail.length} posts của <b>${emailUser.first_name} ${emailUser.last_name}</b></h5> `;
    postEmailInput.value = "";
    return;
  }
  let rows = listPostEmail
    .map(
      (p) => `
    <tr>
      <td>${p.id}</td>
      <td>${p.title}</td>
      <td>${p.created_at}</td>
    </tr>
  `
    )
    .join("");

  document.getElementById("postEmail").innerHTML = `
    <h5 class='mt-3 '>Kết quả: ${listPostEmail.length} posts của <b>${emailUser.first_name} ${emailUser.last_name}</b></h5>
    <table class="table mt-3 table-bordered table-hover">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Tiêu đề</th>
          <th>Ngày tạo</th>
        </tr>
      </thead>
      <tbody>
        ${rows} 
      </tbody>
    </table>
  `;
  postEmailInput.value = "";
}
// Load mặc định
showPage("home");
