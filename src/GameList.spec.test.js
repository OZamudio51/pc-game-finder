import React from 'react';
import GameList from './GameList';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { TestScheduler } from 'jest';

Enzyme.configure({ adapter: new Adapter() });

const mockGames = [
    {
        id: 1,
        game_cover:
          "https://britgamer.s3.eu-west-1.amazonaws.com/2020-03/call-of-duty-modern-warfare-cover.jpg",
        game_genre: "first-person-shooter",
        game_name: "Call of Duty: Modern Warfare",
        game_desc:
          "Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. Serving as the sixteenth overall installment in the Call of Duty series, as well as a reboot of the Modern Warfare sub-series, it was released on October 25, 2019.",
        game_link:
          "https://us.shop.battle.net/en-us/product/call-of-duty-modern-warfare?p=68930",
      },
      {
        id: 2,
        game_cover:
          "https://howlongtobeat.com/games/59836_Insurgency_Sandstorm.jpg",
        game_genre: "first-person-shooter",
        game_name: "Insurgency: Sandstorm",
        game_desc:
          "Insurgency: Sandstorm is a multiplayer tactical first-person shooter video game developed by New World Interactive and published by Focus Home Interactive. It was officially announced in February 2016",
        game_link:
          "https://store.steampowered.com/app/581320/Insurgency_Sandstorm/",
      },
      {
        id: 3,
        game_cover:
          "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Half-Life_Alyx_Cover_Art.jpg/220px-Half-Life_Alyx_Cover_Art.jpg",
        game_genre: "first-person-shooter",
        game_name: "Half Life: Alyx",
        game_desc:
          "Half-Life: Alyx is a 2020 virtual reality first-person shooter developed and published by Valve. Set between the events of Half-Life and Half-Life 2, players control Alyx Vance on a mission to seize a superweapon belonging to the alien Combine.",
        game_link: "https://store.steampowered.com/app/546560/HalfLife_Alyx/",
      },
      {
        id: 4,
        game_cover:
          "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Cover_Art_of_Doom_Eternal.png/220px-Cover_Art_of_Doom_Eternal.png",
        game_genre: "first-person-shooter",
        game_name: "DOOM Eternal",
        game_desc:
          "Doom Eternal is a first-person shooter video game developed by id Software and published by Bethesda Softworks. The sequel to Doom, and the fifth main game in the Doom series, it was released on March 20, 2020",
        game_link: "https://store.steampowered.com/app/782330/DOOM_Eternal/",
      },
];

describe('GameList component', () => {
    test('renders', () => {
        const wrapper = shallow(<GameList games={mockGames} />);

        expect(wrapper.exists()).toBe(true);
    });
});