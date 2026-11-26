import { F, FRAGMENTS, MEMORIES } from './flags.js';

// Pure, deterministic progression: chapter and objective are a function of the flag set.
export function chapterOf(has) {
  if (has(F.EnteredMirasRoom)) return 5;
  if (has(F.EnteredBasement)) return 4;
  if (has(F.KitchenMsg)) return 3;
  if (has(F.ChairNoticed)) return 2;
  return 1;
}

export const fragmentCount = has => FRAGMENTS.filter(has).length;
export const memoryCount = has => MEMORIES.filter(has).length;

export function objectiveOf(has) {
  switch (chapterOf(has)) {
    case 5:
      if (!has(F.MemoriesDone)) return 'memories';
      if (!has(F.FinalCall)) return 'toy_phone';
      return 'choice';
    case 4:
      if (has(F.PhotoRestored)) return 'open_room';
      if (!has(F.PowerOn)) return 'power';
      if (fragmentCount(has) < 4) return 'fragments';
      return 'restore_photo';
    case 3:
      if (has(F.BasementUnlocked)) return 'enter_basement';
      if (!has(F.MirrorMsg)) return 'mirror';
      if (!has(F.TvSolved)) return 'tv_channels';
      if (!has(F.ClosetFound)) return 'footsteps';
      if (!has(F.MusicBoxFound)) return 'listen';
      return 'padlock';
    case 2:
      if (!has(F.GotCamera)) return 'search';
      if (!has(F.TvLiveSeen)) return 'television';
      if (!has(F.GotBrassKey)) return has(F.KeyRevealed) ? 'take_key' : 'photo_bathroom';
      if (!has(F.DiaryRead)) return 'wardrobe';
      if (!has(F.RadioOff)) return 'radio';
      return 'cabinet';
    default:
      if (!has(F.GotFlashlight)) return 'light';
      if (!has(F.FrontDoorTried)) return 'exit';
      if (!has(F.Phone1)) return 'phone';
      if (!has(F.FuseInstalled)) return 'fuse';
      return 'look_around';
  }
}
