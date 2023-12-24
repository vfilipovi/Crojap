import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

const HomePageJobCard = () => {
  return (
    <Card className="py-2 mt-5 w-80 min-w-80 h-64 mr-10">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Dokument IT d.o.o.</p>
        <h4 className="font-bold text-large">Frontend Developer</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <p className="overflow-y-auto h-32">
          Traži se developer s minimalno 1 godinom iskustva za pojačanje timu na
          novim projektima. Traži se developer s minimalno 1 godinom iskustva za
          pojačanje timu na novim projektima.
        </p>
        <Button className="mt-3">Otvori oglas</Button>
      </CardBody>
    </Card>
  );
};

export default HomePageJobCard;
