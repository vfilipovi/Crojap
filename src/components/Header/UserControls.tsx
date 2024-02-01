import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import userImage from "../../assets/user-icon.png";

const items = [
  {
    label: "Prijava",
    key: "login",
  },
  {
    label: "Registracija",
    key: "registration",
  },
  {
    label: "Odjava",
    key: "logout",
  },
];

const UserControls = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <User name="Korisnik" avatarProps={{ src: userImage }} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "logout" ? "danger" : "default"}
            className={item.key === "logout" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserControls;
