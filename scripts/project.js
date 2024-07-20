
const temples = [
    {
      templeName: "Adams Arm Chair",
    //   location: "Aba, Nigeria",
      dedicated: "2024, August, 7",
    //   area: 11500,
      imageUrl: "https://www.bhg.com/thmb/-2H1yO_zGLkECE39FZwH5urAXBc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Best-Places-to-Buy-Furniture-BHG-tout-41822b201e174e3e967b3f344a07a1e3.jpg"
    },
    {
      templeName: "Grey Fabric Armchair",
      location: "Manti, Utah, United States",
      dedicated: "2024, May, 21",
      // area: 74792,
      imageUrl: "https://wallpapers.com/images/high/striped-chairs-in-pauline-rothschild-bedroom-rke46byu3hnccjqf.webp"
    },
    {
      templeName: "coarse Chair",
      location: "Payson, Utah, United States",
      dedicated: "2024, June, 7",
      // area: 96630,
      imageUrl: "https://wallpapers.com/images/high/chinese-designer-wall-art-2h84mv7b08wx4jx4.webp"
    },
    {
      templeName: "Pauline Rothschild Chair",
      location: "Yigo, Guam",
      dedicated: "2024, May, 2",
      // area: 6861,
      imageUrl: "https://www.ezlivingfurniture.ie/media/amasty/webp/catalog/product/1/3/132585_1_grey-fabric-armchair-donna-132585-angle_jpg.webp"
    },
    {
      templeName: "Yellow Rivet Farr Lotus Accent Chair",
      location: "Kensington, Maryland, United States",
      dedicated: "2024, November, 19",
      // area: 156558,
      imageUrl: "https://wallpapers.com/images/high/yellow-rivet-farr-lotus-accent-chair-jmckpw53k3ow3tws.webp"
    },
    {
      templeName: "wooden chair",
      location: "Lima, Perú",
      dedicated: "2024, January, 10",
      // area: 9600,
      imageUrl: "https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      templeName: "American Arm Chair",
      location: "Mexico City, Mexico",
      dedicated: "2024, December, 2",
      // area: 116642,
      imageUrl: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      templeName: "Wingback Arm Chair",
      location: "Salt Lake City, Utah, United States",
      dedicated: "2024 , April, 6",
      // area: 253015,
      imageUrl: "https://www.at-home.co.in/cdn/shop/products/LEROYARMCHAIRBEIGE_FLSFLEROYACBEIGE02.jpg?v=1660115634"
    },
    {
      templeName: "Tufted Soho Chair",
      location: "Bengaluru, India",
      dedicated: "2024, july, 7",
      // area: 40000,
      imageUrl: "https://magnoliahome.co.in/wp-content/uploads/2021/08/Tufted-Soho-Chair-1.1-1.jpg"
    },
    {
      templeName: "Classic Red And Black Chair",
      location: "Chicago, Illinois, United States",
      dedicated: "2024, August, 9",
      // area: 38600,
      imageUrl: "https://wallpapers.com/images/high/classic-red-and-black-chair-qyn4sqbkghjfei6t.webp"
    },
    
    {
      templeName: "Minimalistic Kitchen Furniture",
      location: "Chicago, Illinois, United States",
      dedicated: "1685, August, 9",
      area: 38600,
      imageUrl: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/12/minimalistic-kitchen-furniture-and-rattan-chairs_0_1200.jpg"
    },

    {
      templeName: "Kitchen Furniture 001",
      location: "Chicago, Illinois, United States",
      dedicated: "1780, August, 9",
      area: 38600,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hl1IVi3RpO6WgO7fA0CQawmc72O23MdMng&s"
    },

    {
      templeName: "Wood Furniture",
      location: "Chicago, Illinois, United States",
      dedicated: "1785, August, 9",
      area: 38600,
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2023-kb-dallas-moredesign-a-653fcca61947c.jpg?crop=0.682xw:1.00xh;0,0&resize=980:*"
    },

    {
      templeName: "HD-Cabinet",
      location: "Chicago, Illinois, United States",
      dedicated: "1605, August, 9",
      area: 38600,
      imageUrl: "https://ak1.ostkcdn.com/images/products/is/images/direct/defc179fe1cb85b4a35d0861ce668d8006a7c074/Moasis-53-inch-Rolling-Kitchen-Island-with-13-Gallon-Trash-Can-Storage-Cabinet-Portable-Mobile-Kitchen-Cart.jpg"
    },

    {
      templeName: "Kitchen Furniture 002",
      location: "Chicago, Illinois, United States",
      dedicated: "1585, August, 9",
      area: 38600,
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/ruby-saunders-tp-saunders-018-ph-trevor-parker-664b78e3b7d3c.jpg?crop=1xw:0.843328335832084xh;center,top&resize=1200:*"
    },

    {
      templeName: "Bed furniture 001",
      location: "Chicago, Illinois, United States",
      dedicated: "1985, August, 9",
      area: 4600,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wXaioIJEKhoDNPErF8h_V_CcJk_aDMA4zQ&s"
    },

    {
      templeName: "White HD Furniture",
      location: "Chicago, Illinois, United States",
      dedicated: "1985, August, 9",
      area: 6600,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXo0xwzxmV84dfuHWPy49U_19Cu51oe5rhg&s" 
     },

    
    {
      templeName: "Hard Wood Furniture",
      location: "Chicago, Illinois, United States",
      dedicated: "1985, August, 9",
      area: 5600,
      imageUrl: "https://images.squarespace-cdn.com/content/v1/65f442a17311c97532a87466/1710506852818-8R88ALKCT2NMBJEPLO1P/Boulder-Creek-Bedroom-Collection_sm.jpg?format=1500w"
    },

    {
      templeName: " wood Bed furniture",
      location: "Chicago, Illinois, United States",
      dedicated: "1985, August, 9",
      area: 8600,
      imageUrl: "https://images.squarespace-cdn.com/content/v1/65f442a17311c97532a87466/1710506852846-0DIMFQP9W6LR5I7VKO3R/Liberty-Bedroom-Collection.jpg?format=1500w"
    },


    {
      templeName: "modern Bedroom furniture",
      location: "Chicago, Illinois, United States",
      dedicated: "1985, August, 9",
      area: 3600,
      imageUrl: "https://m.media-amazon.com/images/I/81UASooZY8L._AC_UF894,1000_QL80_.jpg"
    },


    {
      templeName: " Living Room Furniture 001",
      location: "Manti, Utah, United States",
      dedicated: "2005, May, 21",
      area: 740792,
      imageUrl: "https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg"
    },
    {
      templeName: "White Sofa Furniture",
      location: "Manti, Utah, United States",
      dedicated: "2005, May, 21",
      area: 124792,
      imageUrl: "https://embed.widencdn.net/img/cityfurniture/rkn7tmvs5n/1920px/MAR6834-WK2423-0612-NEWARRIVALS-LIVINGROOM-COLORBLOCK-XLG.webp?q=100"
    },
    {
      templeName: "Long Leg Furniture",
      location: "Manti, Utah, United States",
      dedicated: "2005, May, 21",
      area: 114792,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwGiq95jDdEtiSJ9_447gU9VlgVznTLF8WA&s"
    },
    {
      templeName: "Squared-Size Furniture",
      location: "Manti, Utah, United States",
      dedicated: "2005, May, 21",
      area: 640792,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoxpxLSVdcas-UGCUQturOCxn10I0Kz60Fw&s"
    },
    {
      templeName: "Royal Chairs",
      location: "Manti, Utah, United States",
      dedicated: "2005, May, 21",
      area: 747982,
      imageUrl: "https://modeneseinteriors.com/uploads/2020/06/2-classic-traditional-sofa-set-luxury-living-room-italian-handmade-best-furniture.jpg"
    },
    {
      templeName: "Cozy Sofa ",
      location: "Manti, Utah, United States",
      dedicated: "2005, May, 21",
      area: 847962,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpLRFylJU_2mcnzlkgLZZ6p9T_tzD6TOAog&s"
    },

  ];
  
  document.addEventListener('DOMContentLoaded', () => {
      const templeContainer = document.getElementById('templeContainer');
  
      function displayTemples(templeList) {
          templeContainer.innerHTML = '';
          templeList.forEach(temple => {
              const templeCard = document.createElement('div');
              templeCard.className = 'temple-card';
              
              templeCard.innerHTML = `
                  <h2>${temple.templeName}</h2>
            
                  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              `;
  
              templeContainer.appendChild(templeCard);
          });
      }
  
      function filterTemples(criteria) {
          const filteredTemples = temples.filter(temple => {
              switch(criteria) {
                  case 'old':
                      return new Date(temple.dedicated).getFullYear() < 1900;
                  case 'new':
                      return new Date(temple.dedicated).getFullYear() >= 2024;
                  case 'large':
                      return temple.area > 90000;
                  case 'small':
                      return temple.area < 10000;
                  default:
                      return true;
              }
          });
  
          displayTemples(filteredTemples);
      }
  
      document.getElementById('filterOld').addEventListener('click', () => filterTemples('old'));
      document.getElementById('filterNew').addEventListener('click', () => filterTemples('new'));
      document.getElementById('filterLarge').addEventListener('click', () => filterTemples('large'));
      document.getElementById('filterSmall').addEventListener('click', () => filterTemples('small'));
      // document.getElementById('filterHome').addEventListener('click', () => displayTemples(temples));
  
      // Display all temples by default
      // displayTemples(temples);
      
      // Update footer with the current year and last modified date

  });

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
        logo.classList.toggle('hidden');
    })
    });

 
 
  
