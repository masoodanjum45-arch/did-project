// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DecentralizedIdentity {
    struct Identity {
        string name;
        string role;
        uint age;
        string email;
        string phone;
        bool exists;
    }

    mapping(address => Identity) public identities;

    function registerIdentity(
        string memory _name,
        string memory _role,
        uint _age,
        string memory _email,
        string memory _phone
    ) public {
        require(!identities[msg.sender].exists, "Identity already exists");
        identities[msg.sender] = Identity(_name, _role, _age, _email, _phone, true);
    }

    function getIdentity(address user) public view returns (
        string memory, string memory, uint, string memory, string memory
    ) {
        require(identities[user].exists, "Identity does not exist");
        Identity memory id = identities[user];
        return (id.name, id.role, id.age, id.email, id.phone);
    }
}
