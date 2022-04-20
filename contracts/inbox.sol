pragma solidity ^0.8.13;

contract Inbox {
  string public message;

  constructor Inbox(string initialMessage) public {
    message = initialMessage;
  }
  function setMessage(string newMessage) public {
    message = newMessage;
  }
}
