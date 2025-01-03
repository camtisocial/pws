import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import { NodeSDK } from '@opentelemetry/sdk-node';
import * as process from 'process';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { PgInstrumentation } from '@opentelemetry/instrumentation-pg';

const traceExporter = new ConsoleSpanExporter();

export const otelSDK = new NodeSDK({
  spanProcessor: new SimpleSpanProcessor(traceExporter),
  instrumentations: [new HttpInstrumentation(), new PgInstrumentation()],
});

process.on('SIGTERM', () => {
  otelSDK
    .shutdown()
    .then(
      () => console.log('Tracing has been shutdown'),
      (err) => console.log('Error shutting down tracing', err),
    )
    .finally(() => process.exit(0));
});
