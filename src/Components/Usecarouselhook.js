// src/hooks/useCarousel.js


const useCarousel=()=>{

  const items = [
    { image: 'image/img1.jpg', author: 'ADI', title: 'DESIGN SLIDER', topic: 'ANTLER', description: 'Antlers, found primarily on male deer, are fascinating and fast-growing bone structures that regenerate annually. They are used for defense and to attract mates during the breeding season, showcasing the deers health and vitality. Made of bone rather than keratin, antlers can grow up to an inch per day in some species, making them one of the fastest-growing tissues in the animal kingdom. They are initially covered in a soft, vascular skin called velvet, which supplies nutrients until the antlers harden and the velvet is shed. Antlers can also indicate age and dominance within deer populations, playing a key role in their social hierarchy.' },
    { image: 'image/img2.jpg', author: 'ADI', title: 'DESIGN SLIDER', topic: 'ANTLER', description: 'Antlers, primarily found on male deer, are unique bone structures that regrow annually and can grow at astonishing rates, up to an inch per day. These impressive appendages serve multiple purposes, such as defending against predators, fighting for dominance, and attracting mates. Initially covered in a nutrient-rich layer of velvet, antlers eventually harden and shed this covering. The size and complexity of antlers often indicate a deers age and health, making them a crucial part of social hierarchy and breeding success. Additionally, the annual shedding and regrowth of antlers make them one of the most remarkable examples of regeneration in the animal kingdom.' },
    { image: 'image/img3.jpg', author: 'ADI', title: 'DESIGN SLIDER', topic: 'ELEPHANT', description: 'Elephants are the largest land animals on Earth, known for their impressive intelligence, complex social structures, and remarkable memory. They can live up to 70 years and communicate through low-frequency sounds that can travel miles. Elephants use their trunks, which have over 40,000 muscles, for a variety of tasks including drinking, grabbing objects, and greeting other elephants. These gentle giants play a crucial role in their ecosystems by dispersing seeds and creating water holes used by other animals. Despite their strength, elephants are endangered due to habitat loss and poaching for their ivory tusks.' },
    { image: 'image/img4.jpg', author: 'ADI', title: 'DESIGN SLIDER', topic: 'CHEETAH', description: 'The cheetah, renowned as the worlds fastest land animal, can sprint up to 60 to 70 miles per hour (97 to 113 kilometers per hour) in short bursts covering distances of up to 1,500 feet (460 meters). Unlike other big cats, cheetahs cannot roar; instead, they communicate through a variety of vocalizations like purring, growling, and chirping. Their distinctive black "tear tracks" running from the eyes to the mouth help reduce glare from the sun and improve their focus while hunting. Cheetahs are masterful hunters, relying on exceptional eyesight to pinpoint prey from far distances before launching high-speed pursuits to capture gazelles and other swift prey.' },
      { image: 'image/img5.jpg', author: 'ADI', title: 'DESIGN SLIDER', topic: 'LION', description:"Lions, often referred to as the king of the jungle,are the only big cats that live in social groups called prides, which can consist of up to 30 individuals. A pride is typically led by a coalition of males who defend their territory while the females, who are usually related, do most of the hunting. Lions are apex predators with a powerful roar that can be heard up to five miles away, helping them communicate across vast distances. They are also known for their impressive manes, which signify health and virility. Despite their prowess, lions face significant threats from habitat loss and conflicts with humans, making conservation efforts critical for their survival."}
  ];



 

  return {
    items
  };
};

export default useCarousel;
