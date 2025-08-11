import React, { useState } from 'react';
import {
  Button,
  TextField,
  Select,
  FormControl,
  Modal,
  Dialog,
  Alert,
  Toast,
  ToastContainer,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Container
} from '../src';

const ComponentShowcase: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = (severity: 'success' | 'info' | 'warning' | 'error') => {
    const newToast = {
      id: Date.now().toString(),
      severity,
      message: `This is a ${severity} toast notification`,
      duration: 5000,
      onClose: () => removeToast(newToast.id)
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <Container size="lg" padding="lg">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Buttons Section */}
        <Card variant="gradient">
          <CardHeader title="Buttons" subtitle="Various button variants and states" />
          <CardContent>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="primary" loading>Loading</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Forms Section */}
        <Card variant="outlined">
          <CardHeader title="Form Components" subtitle="Input fields and form controls" />
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextField
                label="Email"
                placeholder="Enter your email"
                type="email"
                fullWidth
              />
              
              <TextField
                label="Password"
                placeholder="Enter your password"
                type="password"
                error="Password is required"
                fullWidth
              />
              
              <Select
                label="Country"
                placeholder="Select your country"
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'de', label: 'Germany' }
                ]}
                fullWidth
              />
              
              <FormControl label="Bio" required>
                <textarea
                  placeholder="Tell us about yourself"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    border: '1px solid rgba(157, 78, 221, 0.3)',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </FormControl>
            </div>
          </CardContent>
        </Card>

        {/* Alerts Section */}
        <Card variant="elevated">
          <CardHeader title="Alerts" subtitle="Different alert types and notifications" />
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Alert severity="success" title="Success!" closable>
                Your operation was completed successfully.
              </Alert>
              
              <Alert severity="info" title="Information">
                Here's some helpful information for you.
              </Alert>
              
              <Alert severity="warning" title="Warning!">
                Please review your input before proceeding.
              </Alert>
              
              <Alert severity="error" title="Error!" closable>
                Something went wrong. Please try again.
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Components */}
        <Card variant="default">
          <CardHeader title="Interactive Components" subtitle="Modals, dialogs, and toasts" />
          <CardContent>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
              
              <Button variant="secondary" onClick={() => setDialogOpen(true)}>
                Open Dialog
              </Button>
              
              <Button variant="gradient" onClick={() => addToast('success')}>
                Success Toast
              </Button>
              
              <Button variant="ghost" onClick={() => addToast('info')}>
                Info Toast
              </Button>
              
              <Button variant="danger" onClick={() => addToast('error')}>
                Error Toast
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Nested Cards Example */}
        <Card variant="gradient" hoverable>
          <CardHeader 
            title="Nested Card Example" 
            subtitle="Cards can contain other components"
            action={<Button variant="ghost" size="sm">Action</Button>}
          />
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <Card variant="outlined" size="sm">
                <CardContent>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>Feature 1</h4>
                  <p style={{ margin: 0, color: '#B8B8D0' }}>Description of feature 1</p>
                </CardContent>
              </Card>
              
              <Card variant="outlined" size="sm">
                <CardContent>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'white' }}>Feature 2</h4>
                  <p style={{ margin: 0, color: '#B8B8D0' }}>Description of feature 2</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" size="sm">Learn More</Button>
            <Button variant="secondary" size="sm">Get Started</Button>
          </CardFooter>
        </Card>

      </div>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Example Modal"
        size="md"
      >
        <div style={{ padding: '1rem 0' }}>
          <p style={{ color: '#B8B8D0', margin: '0 0 1rem 0' }}>
            This is an example modal with some content. You can put any React components here.
          </p>
          <TextField
            label="Name"
            placeholder="Enter your name"
            fullWidth
          />
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setModalOpen(false)}>
            Save
          </Button>
        </div>
      </Modal>

      {/* Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Confirm Action"
        description="Are you sure you want to proceed with this action? This cannot be undone."
        actions={[
          {
            label: 'Cancel',
            onClick: () => setDialogOpen(false),
            variant: 'secondary'
          },
          {
            label: 'Confirm',
            onClick: () => {
              setDialogOpen(false);
              addToast('success');
            },
            variant: 'primary'
          }
        ]}
      />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        toasts={toasts}
      />
    </Container>
  );
};

export default ComponentShowcase;
