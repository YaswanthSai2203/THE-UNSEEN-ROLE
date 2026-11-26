// All story flags. The world, objectives and chapters are derived from these.
export const F = {
  Woke: 'woke', GotFlashlight: 'got_flashlight', FrontDoorTried: 'front_door_tried', Phone1: 'phone1_answered',
  GotFuse: 'got_fuse', FuseInstalled: 'fuse_installed', ChairNoticed: 'chair_noticed',
  GotCamera: 'got_camera', TvLiveSeen: 'tv_live_seen', KeyRevealed: 'photo_key_revealed', CircleSeen: 'symbol_circle_seen',
  GotBrassKey: 'got_brass_key', WardrobeOpen: 'wardrobe_open', DiaryRead: 'diary_read', RadioOn: 'radio_on',
  RadioOff: 'radio_off', KitchenMsg: 'kitchen_msg',
  Call2: 'call2_done', MirrorAnomaly: 'mirror_anomaly_seen', MirrorMsg: 'mirror_msg', TvSolved: 'tv_solved',
  Call3: 'call3_done', ClosetFound: 'closet_found', FragA: 'frag_a', MusicBoxFound: 'musicbox_found', FragB: 'frag_b',
  PadlockSeen: 'padlock_seen', BasementUnlocked: 'basement_unlocked',
  EnteredBasement: 'entered_basement', Breaker1: 'breaker_1', Breaker2: 'breaker_2', Breaker3: 'breaker_3',
  PowerOn: 'power_on', TapeSeen: 'tape_seen', FragC: 'frag_c', FragD: 'frag_d', Call4: 'call4_done',
  PhotoRestored: 'photo_restored', GotRoomKey: 'got_room_key',
  EnteredMirasRoom: 'entered_miras_room', Mem1: 'mem_1', Mem2: 'mem_2', Mem3: 'mem_3', Mem4: 'mem_4',
  MemoriesDone: 'memories_done', FinalCall: 'final_call_done', GotFrontKey: 'got_front_key',
};
export const FRAGMENTS = [F.FragA, F.FragB, F.FragC, F.FragD];
export const MEMORIES = [F.Mem1, F.Mem2, F.Mem3, F.Mem4];

export const Items = {
  Flashlight: 'flashlight', Camera: 'instant_camera', Film: 'film', Fuse: 'fuse', BrassKey: 'brass_key',
  MusicBox: 'music_box', RoomKey: 'room_key', FrontKey: 'front_key',
};

export const Ending = { None: 0, Forget: 1, Remember: 2, Stay: 3 };
