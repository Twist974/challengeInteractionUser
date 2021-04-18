import { Kitten } from '../common/kitten';

export const kittenList: Kitten[] = [];

export const userKittenList: Kitten[] = [];

export const addKittenToList = (kitten: Kitten) => {
  kittenList.push(kitten);
};

export const addKittenToUserList = (kitten: Kitten) => {
  kittenList.splice(kittenList.indexOf(kitten), 1);
  userKittenList.push(kitten);
};
export const removeKittenFromUserList = (kitten: Kitten) => {
  userKittenList.splice(userKittenList.indexOf(kitten), 1);
  kittenList.push(kitten);
};
