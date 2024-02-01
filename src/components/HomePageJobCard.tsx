import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { FC } from "react";

interface HomePageJobCardProps {
  companyName: string;
  role: string;
  description: string;
}

const HomePageJobCard: FC<HomePageJobCardProps> = ({
  companyName,
  role,
  description,
}) => {
  return (
    <Card className="py-2 mt-5 w-80 min-w-80 h-64 mr-10">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Popover showArrow placement="bottom" backdrop="opaque">
          <PopoverTrigger>
            <p className="text-tiny uppercase font-bold hover:underline underline-offset-2 cursor-pointer">
              {/* Dokument IT d.o.o. */}
              {companyName}
            </p>
          </PopoverTrigger>
          <PopoverContent className="p-1 w-4/6">
            <div className="p-3">
              <h4 className="font-bold text-xl mb-1">Random Company d.o.o.</h4>
              <p className="mb-2">
                Renomirana poznata firma s 30 godisnjim iskustvom u dizajnu i
                razvoju softvera.
              </p>
              <p>Adresa: Radnička cesta 43, 10000 Zagreb</p>
              <p className="underline underline-offset-2 cursor-pointer">
                Oglasi ovog poslodavca
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <h4 className="font-bold text-large">{role}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <p className="overflow-y-auto h-32">
          {/* Traži se developer s minimalno 1 godinom iskustva za pojačanje timu na
          novim projektima. Traži se developer s minimalno 1 godinom iskustva za
          pojačanje timu na novim projektima. */}
          {description}
        </p>
        <Button className="mt-3 hover:bg-theme-blue-500 hover:text-white">
          Otvori oglas
        </Button>
      </CardBody>
    </Card>
  );
};

export default HomePageJobCard;
