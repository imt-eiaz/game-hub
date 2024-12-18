import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 60 ? "red.400" : "";
  return (
    <Badge color={color} fontSize="14px" spaceX="10px" borderRadius="6px">
      {score}
    </Badge>
  );
};
export default CriticScore;
