const randomQuote = (): string => {
    const quotes = [
        "To be honest you guys don't smell as bad as I thought you would",
        "Sweet tea, unsweet tea, and obesity",
        "The women they don't wear...the top",
        "Your mouth is the final part of the machine",
        "I don't know anything I'm an English teacher",
        "Experience money can buy",
        "I can't deal with stupid people",
        "Patience is bitter, but its fruit is sweet.",
        "Economically I am a bit socialist",
        "They're just good for fuckin'",
        "This is the most homoerotic hike I've ever been on",
        "Yeah, taco pizza saved my life when I was tripping balls of shrooms",
        "Did you guys ever actually watch two girls one cup?",
        "Do you have an ass? I've never checked.",
        "I should have brought my kayak",
        "I'm not attracted to anyone",
        "We should definitely get undressed",
        "It looks like I peed",
        "I want to turn this car into a dryer",
        "I'm just gonna get drunk. Is that okay with everyone?",
        "I have white girls",
        "I am the pidgeon",
        "You just take 93 all the way up",
        "Your ass occupies this car",
        "The one that I have doesnt hold the balls",
        "You have to insulate those fuckers",
        "You ever wanted to hate fuck someone?",
        "You haven't had breakfast until you've had caviar for breakfast",
        "You vomit a lot but you trip real hard. A lot of people report seeing jesus",
        "I'm all torso",
        "Ugh, a lot of piss",
        "My sister had nine kids, trust me you dont need a job",
        "Just give it to them, they don't know they want it",
        "I just needed to be alone with the pickle",
        "I dont believe in cruise control",
        "Indian flavor to tickle your taste buds",
        "Why do them call them love handles? I get no love.",
        "Candy is life",
        "My dad got paid for his art in cocaine back in the 80s",
        "I dont know your dad",
        "I don't think he's cleared to twist",
        "I met my wife over heroin anal retrieval",
        "Have you ever shoved anything up your asshole?",
        "I'll do whatever you want just tell me where you want it to go",
        "The contacts were an adjustment it felt like I had cheese in my eyes",
        "Hold still so I can slice you",
        "Neoprene is not benign",
        "I only know him digitally",
        "Yeah, I don't even think shes ever got an abortion",
        "Yo, dumbfuck, let's do it",
        "There's no love left with these bitches",
        "I played golf one time in 1965 and said fuck that",
        "I dont keep up with black athletes",
        "I'm just the coldest baby",
        "I've never had a safe word",
        "Freak chicken up",
        "It's fine rabbits only have type two clamydia",
        "I mean, you guys are fine, I guess",
        "I dont know, dude. Women talk so fucking much.",
        "My ass is well insulated",
        "It's not butter it's margarine",
        "No, don't touch me",
        "I have to clean because my rabbit shits",
        "You are a baby on the outside but a nice matured man on the inside",
        "I couldn't even be vertical for a whole day",
        "Socializing without an objective is hard for me"
    ];
    const random = Math.floor(Math.random() * (quotes.length));
    return quotes[random];
};

export default randomQuote;

