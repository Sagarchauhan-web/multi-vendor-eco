import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 p-2.5'>
      <div>
        <Button variant={'elevated'}>
          <span>Button</span>
        </Button>
      </div>
      <div>
        <Input placeholder='I am an input' />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea value={'Iam a text area'} />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
