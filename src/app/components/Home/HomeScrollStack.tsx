import ScrollStack, { ScrollStackItem } from '../ScrollStacks';

export default function HomeScrollStack() {
  return (
    <ScrollStack>
      <ScrollStackItem itemClassName='bg-red-200 h-[200px]'>
        <h2>Card 1</h2>
        <p>This is the first card in the stack</p>
      </ScrollStackItem>
      <ScrollStackItem itemClassName='bg-blue-200 h-[200px]'>
        <h2>Card 2</h2>
        <p>This is the second card in the stack</p>
      </ScrollStackItem>
      <ScrollStackItem itemClassName='bg-black-200 h-[200px]'>
        <h2>Card 3</h2>
        <p>This is the third card in the stack</p>
      </ScrollStackItem>
    </ScrollStack>
  );
}
