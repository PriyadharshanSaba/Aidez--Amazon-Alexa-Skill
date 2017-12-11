//AWS Lambda server code
//Creator/ Developer Name: Priyadharshan Saba
//Skill Name: Aidez
//Lambda Function name: gta5Cheats_pc
//Runtime: Node.js.6.10

/*
Description
Aidéz does not require any special hardware requirements.
Aidéz helps us with the important cheats during the most crucial moments of  GTA 5.
You can ask for cheats like Max health, explosives and  explosive attack, lower or increase wanted level,
get a bike/ sports bike, race car, cycle/bmx or helicopter, slow motion aim.
You can also  jump high, spawn mid air, slow motion aim, invincible, swim fast, run fast, jump high,
act drunk, fire bullets, get weapons, get a parachute.
*/

/*
 drunk
 explosives
 explosive attack
 run fast
 swim fast
 fire bullets
 invincible
 lower wanted level
 max health

 */

var reindeers = {
    "drunk": {
        "code": "LIQUOR",
        "chcode": "L,I, Q, U, O, R"
    },
    "explosives": {
        "code": "HIGH EX",
        "chcode": "H,I,G,H ,E, X"
    },
    "explosive": {
        "code": "HIGH EX",
        "chcode": "H,I,G,H ,E, X"
    },
    "explosive attack": {
        "code": "HOTHANDS",
        "chcode": "H , O , T,  H,  A,  N,  D,  S"
    },
    "explosive attacks": {
        "code": "HOTHANDS",
        "chcode": "H , O , T,  H,  A,  N,  D,  S"
    },
    "run fast": {
        "code": "CATCHME",
        "chcode": "C , A , T , C , H , M , E"
    },
    "swim fast": {
        "code": "GOTGILLS",
        "chcode": "G, O,  T,  G,  I,  L,  L,  S"
    },
    "fire bullets": {
        "code": "INCENDIARY",
        "chcode": "I,N,C,E,N,D,I,A,R,Y"
    },
    "invincible": {
        "code": "PAINKILLER",
        "chcode": "P , A , I , N , K , I , L , L , E , R"
    },
    "lower wanted level": {
        "code": "LAWYERUP",
        "chcode": "L , A , W , Y , E , R , U , P"
    },
    "increase wanted level":{
        "code": "FUGITIVE",
        "chcode": "F,U,G,I,T,I,V,E"
    },
    "sky fall": {
        "code": "SKYFALL",
        "chcode":"S,k,y,f,a,l,l"
    },
    "slow Motion Aim": {
        "code":"DEADEYE",
        "chcode": "D,E,A,D,E,Y,E"
    },
    "jump high": {
        "code": "HOPTOIT",
        "chcode": "H,O,P,T,O,I,T"
    },
    "high jump": {
        "code": "HOPTOIT",
        "chcode": "H,O,P,T,O,I,T"
    },
    "weapons": {
        "code": "TOOLUP",
        "chcode": "T,O,O,L,U,P"
    },
    "parachute": {
        "code": "SKYDIVE",
        "chcode": "S,K,Y,D,I,V,E"
    },
    "spawn mid air": {
        "code": "SKYDIVE",
        "chcode": "S,K,Y,D,I,V,E"
    },
    "max health": {
        "code": "TURTLE",
        "chcode": "T ,U , R , T , L , E"
    },
    "cycle": {
        "code" : "BANDIT",
        "chcode": "B,A,N,D,I,T"
    },
    "bicycle": {
        "code" : "BANDIT",
        "chcode": "B,A,N,D,I,T"
    },
    "bmx": {
        "code" : "BANDIT",
        "chcode": "B,A,N,D,I,T"
    },
    "helicopter": {
        "code" : "BUZZOFF",
        "chcode" : "B,U,Z,Z,O,F,F"
    },
    "race car" : {
        "code" :"COMET",
        "chcode" : "C,O,M,E,T"
    },
    "comet car" : {
        "code" :"COMET",
        "chcode" : "C,O,M,E,T"
    },
    "comet" : {
        "code" :"COMET",
        "chcode" : "C,O,M,E,T"
    },
    "sports car" : {
        "code" :"COMET",
        "chcode" : "C,O,M,E,T"
    },
    "bike" : {
        "code" : "ROCKET",
        "chcode" : "R,O,C,K,E,T"
    },
     "sports bike" : {
        "code" : "ROCKET",
        "chcode" : "R,O,C,K,E,T"
    },

}

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        if (event.session.application.applicationId !== "amzn1.ask.skill.6566676f-6b5b-49c7-8623-36d7c6814f4a") {
            context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                     event.session,
                     function callback(sessionAttributes, speechletResponse) {
                     context.succeed(buildResponse(sessionAttributes, speechletResponse));
                     });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                     event.session,
                     function callback(sessionAttributes, speechletResponse) {
                     context.succeed(buildResponse(sessionAttributes, speechletResponse));
                     });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    getWelcomeResponse(callback)
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {

    var intent = intentRequest.intent
    var intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == "ReindeerIntent") {
        handleReindeerResponse(intent, session, callback)
    } else if (intentName == "AMAZON.YesIntent") {
        handleYesResponse(intent, session, callback)
    } else if (intentName == "AMAZON.NoIntent") {
        handleNoResponse(intent, session, callback)
    } else if (intentName == "AMAZON.HelpIntent") {
        handleGetHelpRequest(intent, session, callback)
    } else if (intentName == "AMAZON.StopIntent") {
        handleFinishSessionRequest(intent, session, callback)
    } else if (intentName == "AMAZON.CancelIntent") {
        handleFinishSessionRequest(intent, session, callback)
    } else {
        throw "Invalid intent"
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {

}

// ------- Skill specific logic -------

function getWelcomeResponse(callback) {
    var speechOutput = "I can tell you GTA five cheats for PC. which would you like"

    var reprompt = "I can tell you cheats for GTA five for PC"

    var header = "GTA 5 PC Cheat Codes"

    var shouldEndSession = false

    var sessionAttributes = {
        "speechOutput" : speechOutput,
        "repromptText" : reprompt
    }

    callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession))

}

function handleReindeerResponse(intent, session, callback) {
    var reindeer = intent.slots.Reindeer.value.toLowerCase()

    if (!reindeers[reindeer]) {
        var speechOutput = "I'm afraid i cant help you with that, sorry. You can ask me cheats for max health, swim fast, weapons and more."
        var repromptText = "Try asking about another cheat"
        var header = "Not Famous Enough"
    } else {
        var cheat_code = reindeers[reindeer].code
        var ch_slow = reindeers[reindeer].chcode
        var speechOutput = "Cheat code for " + capitalizeFirst(reindeer) + " is , , , " + cheat_code +". Type,  " + ch_slow + ". Do you want to hear about more cheats?"
        var repromptText = "Do you want to hear more cheats?"
        var header = capitalizeFirst(reindeer)
    }

    var shouldEndSession = false

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}

function handleYesResponse(intent, session, callback) {
    var speechOutput = "Which cheat do you need?"
    var repromptText = speechOutput
    var shouldEndSession = false

    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))
}

function handleNoResponse(intent, session, callback) {
    handleFinishSessionRequest(intent, session, callback)
}

function handleGetHelpRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    var speechOutput = "I can tell you cheats to play GTA five for PC"

    var repromptText = speechOutput

    var shouldEndSession = false

    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))

}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
             buildSpeechletResponseWithoutCard("Good bye! Was fun playing with you!", "", true));
}


// ------- Helper functions to build responses for Alexa -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
    outputSpeech: {
    type: "PlainText",
    text: output
    },
    card: {
    type: "Simple",
    title: title,
    content: output
    },
    reprompt: {
    outputSpeech: {
    type: "PlainText",
    text: repromptText
    }
    },
    shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
    outputSpeech: {
    type: "PlainText",
    text: output
    },
    reprompt: {
    outputSpeech: {
    type: "PlainText",
    text: repromptText
    }
    },
    shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
    };
}

function capitalizeFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}
