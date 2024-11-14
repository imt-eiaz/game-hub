import { Card, CardBody, Skeleton, } from '@chakra-ui/react'
import { SkeletonText } from './ui/skeleton'

const GameCardSkeleton = () => {
  return (
   <>
   <Card.Root w='300px' borderRadius={10} overflow="hidden">
      <Skeleton height='200px'></Skeleton>
     <CardBody>
        <SkeletonText />
      </CardBody>
   </Card.Root>
</>

)
}

export default GameCardSkeleton;
