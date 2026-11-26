import { F, Items } from './flags.js';
import { fragmentCount, memoryCount } from './rules.js';

export const S = { Caller: 'Voice on the phone', Radio: 'Radio', Tv: 'Television', Child: 'Child', Woman: 'Woman', Man: 'Man' };

// id: [objective, hint 1, hint 2]
export const OBJECTIVES = {
  light: ['Find a light.', 'Something is on the bedside table.', 'The flashlight is on the bedside table. Take it with E and switch it on with F.'],
  exit: ['Find a way out.', 'The front door is at the south end of the hallway.', 'Walk down the hallway to the front door and try to open it.'],
  phone: ['Answer the telephone.', 'The ringing comes from the living room.', 'The telephone is on the side table next to the sofa in the living room.'],
  fuse: ['Restore the power in the hallway.', 'The fuse box is on the hallway wall. One fuse is missing.', 'A note on the refrigerator mentions the fuses. Check the kitchen drawer to the left of the sink.'],
  look_around: ['Look around the apartment.', 'Leave the living room for a while, then come back.', 'Look at the chair by the small dining table in the living room.'],
  search: ['Something moved. Search the apartment.', 'The bedroom desk has a drawer.', 'The instant camera is in the bedroom desk drawer.'],
  television: ['Something is wrong with the television.', 'Go back to the living room.', 'Stand in the living room near the television and wait.'],
  photo_bathroom: ['Photograph the bathroom.', 'The television showed something under the bathroom sink that your eyes can\'t see.', 'Stand in the bathroom, face the sink and press G to take a photograph.'],
  take_key: ['Take what the photograph revealed.', 'Look under the bathroom sink.', 'The brass key is on the floor under the bathroom sink.'],
  wardrobe: ['Open the locked wardrobe.', 'The small brass key fits something in the bedroom.', 'Use the brass key on the bedroom wardrobe and read what is inside.'],
  radio: ['Find the voice in the kitchen.', 'The radio is on the kitchen counter.', 'Walk to the kitchen counter and switch the radio off.'],
  cabinet: ['The radio told you not to look. Look.', 'One of the kitchen cabinets is open.', 'Open the wall cabinet above the kitchen counter.'],
  mirror: ['Find out what she drew on the mirror.', 'She drew on the bathroom mirror in the dark, and you had to close your eyes to see it.', 'Switch off the bathroom light, stand at the mirror and hold Q to close your eyes for a few seconds.'],
  tv_channels: ['Tune the television.', 'The mirror showed three numbers.', 'Use the television and tune channels 11, 4 and 7, in that order.'],
  footsteps: ['Follow the footsteps. Don\'t look at them.', 'They only move when you aren\'t looking at where they are. Listen, look away, follow.', 'Turn your back to the sound and walk after it slowly. Closing your eyes helps.'],
  listen: ['Something is playing. Find it.', 'You can only hear it with your eyes closed (hold Q).', 'The music comes from the bedroom. Close your eyes right next to the bed.'],
  padlock: ['Open the basement padlock.', 'Each symbol was given a number: the bathroom photograph, the kitchen cabinet, the television and the closet.', 'Circle 0, triangle 2, square 1, cross 9: February 19th, her birthday. The journal (Tab) keeps everything you\'ve read.'],
  enter_basement: ['Go down to the basement.', 'The basement door is at the north end of the hallway.', 'Walk through the basement door at the end of the hallway.'],
  power: ['Restore the power.', 'Three breakers are spread around the basement. Don\'t keep your back to it for long.', 'Breakers: north-west corner, middle of the west wall, north end of the east wall.'],
  fragments: ['Find the missing pieces of the photograph ({n}/4).', 'She hid things: in the hallway closet, in her music box, in the old television, in the storage boxes.', 'Missing pieces: hallway closet shelf, music box under the bed (listen with eyes closed), basement TV cabinet, basement storage boxes.'],
  restore_photo: ['Restore the family photograph in the living room.', 'There is an empty frame in the living room.', 'The torn frame hangs on the wall next to the bookshelf in the living room. Use it.'],
  open_room: ['Open the locked room in the basement.', 'The ribbon key opens a door downstairs.', 'The locked door is at the far end of the basement.'],
  memories: ['Remember her ({n}/4).', 'Things appear in this room when you are not looking at them.', 'Stand in the middle of the room facing one wall for a few seconds, then turn around and look.'],
  toy_phone: ['Answer the toy telephone.', 'It is on the floor by the small bed.', 'Use the toy telephone by the bed.'],
  choice: ['Leave. Look at her. Or keep your eyes closed.', 'There are three ways this ends.', 'Leave through the front door upstairs with the key; or look at the empty chair and don\'t look away; or close your eyes in this room and keep them closed.'],
};

export function objectiveText(id, has) {
  const o = OBJECTIVES[id];
  if (!o) return '';
  const n = id === 'fragments' ? fragmentCount(has) : id === 'memories' ? memoryCount(has) : 0;
  return o[0].replace('{n}', n);
}
export const hintFor = (id, level) => OBJECTIVES[id]?.[Math.min(1 + level, 2)] ?? null;

export const CHECKPOINT_FLAGS = new Set([F.Phone1, F.FuseInstalled, F.GotCamera, F.GotBrassKey, F.DiaryRead, F.MirrorMsg,
  F.TvSolved, F.ClosetFound, F.MusicBoxFound, F.BasementUnlocked, F.PowerOn, F.FragC, F.FragD, F.PhotoRestored,
  F.MemoriesDone, F.FinalCall, F.GotFrontKey]);

export const CHAPTER_TITLES = ['', 'AWAKENING', 'SOMETHING IS WRONG', "DON'T LOOK AWAY", 'THE EMPTY SPACE', 'REMEMBER'];
export const chapterLabel = ch => (ch >= 1 && ch <= 5 ? 'CHAPTER ' + ['', 'I', 'II', 'III', 'IV', 'V'][ch] : '');

export const ITEMS = {
  [Items.Flashlight]: ['Flashlight', 'A heavy metal flashlight. The batteries rattle when you shake it. (F)'],
  [Items.Camera]: ['Instant camera', 'An old instant camera with a cracked strap. It sees more than you do. (G)'],
  [Items.Film]: ['Instant film', 'One exposure each. The living room drawer always seems to have more.'],
  [Items.Fuse]: ['Fuse', 'A ceramic fuse. Someone wrote HALL on it in pencil.'],
  [Items.BrassKey]: ['Small brass key', 'It was not there until you photographed it.'],
  [F.FragA]: ['Photo fragment (top-left)', 'A torn corner of a photograph. The white border runs along its top and left edges. A man\'s shoulder.'],
  [F.FragB]: ['Photo fragment (top-right)', 'A torn corner. Border along the top and right. A woman\'s face, half turned away.'],
  [F.FragC]: ['Photo fragment (bottom-left)', 'A torn corner. Border along the bottom and left. A man\'s hand, reaching down.'],
  [F.FragD]: ['Photo fragment (bottom-right)', 'A torn corner. Border along the bottom and right. A small yellow sleeve.'],
  [Items.MusicBox]: ['Music box', 'A child\'s music box. The dancer inside has been snapped off.'],
  [Items.RoomKey]: ['Key with a ribbon', 'A small key tied with a faded pink ribbon.'],
  [Items.FrontKey]: ['Front door key', 'A paper tag in a child\'s handwriting: FOR WHEN YOU ARE READY TO GO.'],
};
export const itemName = id => ITEMS[id]?.[0] ?? id;
export const itemDescription = id => ITEMS[id]?.[1] ?? '';

export const DOCS = {
  fridge_note: ['Note on the refrigerator', 'Fuses - kitchen drawer, left of the sink.\nThe hallway one keeps going. Don\'t let her touch the box.\n\n- H.'],
  photo_back: ['Back of the family photograph', 'The photograph is gone from the frame. Only its torn edges remain.\n\nWritten on the backing board in pencil:\n"Lindell St. - summer. A., H. & M."'],
  diary: ['Diary', 'I keep writing her name and crossing it out. The doctor says writing helps. It doesn\'t.\n\n' +
    'Hanna has taken the photographs down. She says she can\'t look at them. I can\'t look at the spaces where they used to hang.\n\n' +
    'February 19th. She would have been seven. I bought a cake and didn\'t light it.\n\n' +
    'When the lights went out she used to draw on the bathroom mirror with her finger. She said the mirror kept her secrets, and you could only see them if you closed your eyes and counted.\n\n' +
    'I don\'t remember the phone call. Everyone keeps telling me about the phone call.'],
  drawing: ['Child\'s drawing', 'Crayon on paper. Four rooms. A tall grey figure with no face standing in every one of them.\nA small figure drawn in blue, lying down, in the room with the bath.\n\nUnderneath, in uneven letters:\n\nDADDY DONT LOOK AWAY'],
  cabinet: ['Writing inside the cabinet', 'Scratched into the wood, over and over:\n\nSHE WAS RIGHT THERE\n\nAnd below, smaller:\n\nCROSS = 9\nSHE DREW ON THE MIRROR IN THE DARK. CLOSE YOUR EYES.'],
  closet_note: ['Note on the closet shelf', 'SQUARE = 1\n\nYou heard them, didn\'t you? Small feet. They always went to the closet when she was hiding.\nYou never looked there first. You never looked anywhere first.'],
  clipping: ['Newspaper clipping', 'CHILD, 6, DIES IN APARTMENT ACCIDENT\n\nLINDELL STREET - A six-year-old girl died late on Tuesday evening after being found unresponsive in the bathtub of her family\'s fourth-floor apartment.\n\n' +
    'Paramedics were called by the girl\'s father, 34, at 9:41 p.m. Police said there were no suspicious circumstances.\n\n' +
    'Neighbours described the family as "quiet, kind, always together." The girl\'s name has not been released at the family\'s request.'],
  coroner: ['Medical examiner\'s summary', 'Name: Mira Vale.  Age: 6.\nCause of death: drowning.  Manner: accident.\n\n' +
    'Notes: Father states he left the bathroom to answer a telephone call (work) at approximately 9:20 p.m. and became "distracted". ' +
    'Television was on in the living room. Child found at approximately 9:40 p.m. Father attempted resuscitation.'],
  psych: ['Psychiatric intake form', 'St. Agnes Hospital - Psychiatric Intake\nPatient: Adrian Vale, 35.\n\n' +
    'Admitted after an overdose eleven months following the death of his daughter. Presents with dissociative amnesia; unable to state his own name on admission.\n\n' +
    'Repeatedly describes "empty spaces" in his home that he "must not look at". Reports a recurring dream of an apartment that rearranges itself whenever he looks away.\n\n' +
    'Patient asked staff to disconnect the telephone in his room. Prognosis: guarded.'],
  letter: ['Letter', 'Adrian,\n\nI\'m leaving the key with your mother. I can\'t be in that apartment anymore. Every room has a space in it where she should be, and you walk around them like they\'re holes in the floor.\n\n' +
    'I don\'t blame you for the phone call. I blame you for never looking at her again. Not even in the photographs.\n\n' +
    'One day you\'ll have to look. I hope I\'m there when you do.\n\n- H.'],
  basement_note: ['Label on the storage boxes', 'MIRA - CLOTHES\nMIRA - DRAWINGS\nMIRA - DO NOT OPEN\n\nThe last one has been opened.'],
};
export const docTitle = id => DOCS[id]?.[0] ?? id;
export const docBody = id => DOCS[id]?.[1] ?? '';

const L = (speaker, text) => ({ speaker, text });
export const LINES = {
  opening: [L('', 'I don\'t know this room.'), L('', 'I don\'t know my name.')],
  call1: [L(S.Caller, '...hello? Don\'t hang up. Listen to me.'), L(S.Caller, 'Whatever happens, don\'t look at the empty spaces.')],
  afterCall1: [L('', 'The line is dead. The cord isn\'t plugged into anything.')],
  call2: [L(S.Caller, 'You\'re looking in the wrong direction.')],
  afterCall2: [L('', 'Something is breathing. Right behind me.'), L('', '...There\'s nothing there. There\'s nothing there.')],
  call3: [L(S.Caller, 'She called you. Twice. \'Daddy, look.\''), L(S.Caller, 'And you said: one minute.'), L(S.Caller, 'It was always one minute.')],
  call4: [L(S.Caller, 'It isn\'t a monster, you know.'), L(S.Caller, 'It\'s the shape of where she should be. Everything you won\'t look at gets to move.')],
  radio: [L(S.Radio, '...police have confirmed that the death of a six-year-old girl on Lindell Street was a tragic accident...'),
    L(S.Radio, '...the girl\'s father, who made the emergency call, has asked for privacy...'),
    L(S.Radio, '...and if you\'re still in the apartment, don\'t look in the cabinet. Don\'t open it. Don\'t-')],
  tvLive: [L('', 'It was standing right behind me. On the screen.'), L('', 'Then the picture changed. The bathroom. Something under the sink.'), L('', 'My eyes can\'t see it. Maybe the camera can.')],
  broadcast: [L(S.Tv, 'Good evening, and welcome to a very special birthday show.'), L(S.Child, 'Look, Daddy! A triangle! It\'s got three corners!'),
    L(S.Man, 'Three corners. But on this one, the triangle is number two.'), L(S.Child, 'Why?'),
    L(S.Man, 'Because you\'re the second most important thing in the world. After the cake.')],
  tape: [L(S.Woman, 'Say hi to Daddy!'), L(S.Child, 'Hi Daddy! Look! Look what I made!'), L(S.Man, 'One minute, sweetheart. I\'m on the phone.'),
    L(S.Child, 'You always say one minute.'), L('', 'I remember her voice. Why can\'t I remember her face?')],
  enterBasement: [L('', 'It smells of damp cardboard and old dust.'), L('', 'There\'s something down here with me. It\'s very quiet when I look at it.')],
  memoriesDone: [L('', 'Her name is Mira.'), L('', 'Her name was Mira.')],
  finalCall: [L(S.Child, 'Daddy? You found my room.'), L(S.Child, 'You can go now. The key is on my desk. You won\'t have to remember anything.'),
    L(S.Child, 'Or you can look at me. Really look. Even if it hurts.'), L(S.Child, 'Or you can close your eyes. Like before. Then nothing ever has to change.')],
};

export const MEMORY_THOUGHTS = [
  'Pip. Her rabbit. She chewed its ear when she was scared of the dark.',
  'One red shoe. We never found the other one. She said it was hiding.',
  'Her crayons. She drew on everything. The walls. The mirror. My hands.',
  'Three people. She always drew me looking at her.',
];
export const BLACKOUTS = ['I lost time. How long was I gone?', 'Breathe. The floor is real. The walls are real.', 'Something was standing very close to me.'];
export const PLAIN_CAPTIONS = ['An ordinary photograph. Probably.', 'Nothing unusual. You keep looking anyway.', 'The flash makes the room look smaller than it is.', 'A photograph of a room no one lives in.'];
export const pick = a => a[Math.floor(Math.random() * a.length)];

export const ENDINGS = {
  1: { title: 'ENDING I - FORGET', epigraph: 'You can only see what you are willing to forget.', music: 'drone', lines: [
    L('', 'The door opens onto a corridor you have never seen.'), L('', 'The stairs go down further than they should.'),
    L('', 'Outside, it is morning. The air is cold and smells of rain.'), L('', 'You don\'t remember the apartment. You don\'t remember a name.'),
    L('', 'Somewhere behind you, a telephone is ringing.'), L('', 'You don\'t turn around.')] },
  2: { title: 'ENDING II - REMEMBER', epigraph: 'Some things only stop moving when you finally look at them.', music: 'lullaby', lines: [
    L('', 'She is sitting on the chair. She was always sitting on the chair.'),
    L('', 'She is smaller than you remember. Exactly the size of the space you wouldn\'t look at.'), L(S.Child, 'You looked.'),
    L('', 'Her name is Mira Vale. She was six years old.'), L('', 'My name is Adrian Vale. I was on the phone.'),
    L('', 'I\'m sorry. I\'m looking now.'), L('', '...'), L('', 'A hospital room. A window. Hanna asleep in the chair beside the bed.'),
    L('', 'When she wakes up, you tell her you remember.')] },
  3: { title: 'ENDING III - STAY', epigraph: 'Whatever you don\'t look at, waits.', music: 'drone', lines: [
    L('', 'You keep your eyes closed.'), L('', 'Small footsteps cross the room and stop beside you. They wait.'),
    L('', 'After a long time, they go away.'), L('', 'In the dark, nothing has to have happened.'), L('', '...'),
    L('', 'A man wakes up in an unfamiliar apartment. He doesn\'t remember his name.'),
    L('', 'The telephone rings. The voice on the line is his own.'), L(S.Caller, 'Whatever happens, don\'t look at the empty spaces.')] },
};

export const CREDITS = 'THE UNSEEN\n\nA psychological horror game\n\n\nGame design, programming, writing,\nlevel design, procedural art and sound\n\nThe Unseen development team\n\n\n' +
  'Every texture, model, voice and sound in this game\nis generated procedurally in your browser.\nNo third-party assets were used.\n\nBuilt with three.js\n\n\n' +
  'If you are struggling with grief or thoughts of self-harm,\nplease reach out to someone you trust or a local support line.\n\n\nThank you for looking.';
