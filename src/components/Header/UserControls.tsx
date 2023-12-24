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
    key: "new",
    label: "New file",
  },
  {
    key: "copy",
    label: "Copy link",
  },
  {
    key: "edit",
    label: "Edit file",
  },
  {
    key: "delete",
    label: "Delete file",
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
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserControls;
