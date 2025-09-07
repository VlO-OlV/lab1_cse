import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export const ButtonSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Button</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Buttons trigger actions or events, such as submitting a form or navigating to another page.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic Button</h3>
            <Button className='cursor-pointer'>Submit</Button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Button Variants</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="destructive" className='cursor-pointer'>Delete</Button>
              <Button variant="outline" className='cursor-pointer'>Click me</Button>
              <Button disabled className='cursor-pointer'>Loading...</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}