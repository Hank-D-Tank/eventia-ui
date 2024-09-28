const eventData = [
    {
        id: 1,
        image: "img-1.jpg",
        date: {
            day: 21,
            month: "DEC"
        },
        helpers: [
            {
                name: "Jane Doe",
                img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Manager"
            },
            {
                name: "John Smith",
                img: "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Sound Engineer"
            },
            {
                name: "Alice Johnson",
                img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Choreographer"
            }
        ],
        venueType: "Indoor Arena",
        title: "Madison Square Garden",
        participants: 1456,
        artist: {
            name: "Mahmood",
            genre: "Pop / Rap",
            about: "Alessandro Mahmoud, known professionally as Mahmood, is an Italian singer-songwriter. He rose to prominence after winning the Sanremo Music Festival 2019 with his song 'Soldi'.",
            famousWorks: ["Soldi", "Rapide", "Barrio"]
        },
        eventInfo: {
            duration: "2 hours",
            openingAct: "TBA",
            ticketInfo: "Available on CrowdVolt"
        }
    },
    {
        id: 2,
        image: "img-2.jpg",
        date: {
            day: 15,
            month: "JAN"
        },
        helpers: [
            {
                name: "Emily White",
                img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Producer"
            },
            {
                name: "Michael Brown",
                img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Stylist"
            },
            {
                name: "Sarah Green",
                img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Marketing Manager"
            }
        ],
        venueType: "Stadium",
        title: "SoFi Stadium",
        participants: 2892,
        artist: {
            name: "The Weeknd",
            genre: "R&B / Pop",
            about: "Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He is known for his sonic versatility and dark lyricism.",
            famousWorks: ["Blinding Lights", "Starboy", "Save Your Tears"]
        },
        eventInfo: {
            duration: "2.5 hours",
            openingAct: "Doja Cat",
            ticketInfo: "Available on CrowdVolt"
        }
    },
    {
        id: 3,
        image: "img-3.jpg",
        date: {
            day: 7,
            month: "FEB"
        },
        helpers: [
            {
                name: "David Lee",
                img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Tour Manager"
            },
            {
                name: "Laura Chen",
                img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Backup Singer"
            },
            {
                name: "Robert Taylor",
                img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                role: "Guitarist"
            }
        ],
        venueType: "Amphitheater",
        title: "Hollywood Bowl",
        participants: 2103,
        artist: {
            name: "Enrique Iglesias",
            genre: "Latin Pop",
            about: "Enrique Iglesias is a Spanish-Filipino singer, songwriter, record producer and actor. He is widely regarded as the King of Latin Pop.",
            famousWorks: ["Bailando", "Hero", "Be With You"]
        },
        eventInfo: {
            duration: "2 hours",
            openingAct: "Ricky Martin",
            ticketInfo: "Available on CrowdVolt"
        }
    }
];