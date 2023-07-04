import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Taj Hotel';
  numberOfRooms = 10;

  rooms: Room = {
  totalRooms:20,
  availableRooms:10,
  bookedRooms:5

  };


  hiddenRooms = false;

  toggle() {
    this.hiddenRooms = !this.hiddenRooms;
  }





  roomList:RoomList[] =[
{
  roomNumber:1,
  roomType:'Deluxe Room',
  amenities:'Air conditioner',
  price:2000,
  photos:'https://www.oyorooms.com/hotels-in-mohali/',
  checkinTime:new Date('04-jul-2023'),
  checkoutTime:new Date('05-jul-2023'),
  rating:4.5,
},

{
  roomNumber:2,
  roomType:'Deluxe Room',
  amenities:'Air conditioner , free Wi-fi',
  price:4500,
  photos:'https://www.oyorooms.com/hotels-in-mohali/',
  checkinTime:new Date('04-jul-2023'),
  checkoutTime:new Date('05-jul-2023'),
  rating:4.9,
}
,
{
  roomNumber:3,
  roomType:'Deluxe Room',
  amenities:'Air conditioner , free Wi-fi',
  price:3000,
  photos:'https://www.oyorooms.com/hotels-in-mohali/',
  checkinTime:new Date('04-jul-2023'),
  checkoutTime:new Date('05-jul-2023'),
  rating:3.5,
},
{
  roomNumber:4,
  roomType:'Private Suite',
  amenities:'Air conditioner , free Wi-fi',
  price:1000,
  photos:'https://www.oyorooms.com/hotels-in-mohali/',
  checkinTime:new Date('04-jul-2023'),
  checkoutTime:new Date('05-jul-2023'),
  rating:2.6,
},

  ]
 
}
