import { Button, Flex, Text } from "@radix-ui/themes";

export default function Main() {
  return (
    <>
      <Flex gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let&apos;s go</Button>
      </Flex>

      <h1>Hello!</h1>
      <h2>Welcome to Radix Themes</h2>
      <h3>Let&apos;s build something great together</h3>
      <h4>Are you ready?</h4>
      <h5>Let&apos;s go!</h5>
      <h6>Let&apos;s go!</h6>
      <p>Let&apos;s go!</p>

      <div className="flex flex-row gap-4">
        <button className="button-primary">This is primary button</button>
        <button className="button-secondary">This is secondary button</button>
      </div>
    </>
  );
}