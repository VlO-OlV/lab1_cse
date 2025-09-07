import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Input } from '../ui/Input';

export const InputSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Text Input</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Text inputs allow users to enter free-form text. They can be used for usernames, emails, passwords, etc.</p>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic Text Input</h3>
            <Input placeholder="Enter your first name" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Disabled Text Input</h3>
            <Input placeholder="Enter your middle name" disabled />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};