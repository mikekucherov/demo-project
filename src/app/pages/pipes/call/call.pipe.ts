import { ChangeDetectorRef, EmbeddedViewRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'call' })
export class CallPipe<C> implements PipeTransform {
  private readonly context: C;

  // with Ivy you can inject EmbeddedViewRef directly
  constructor(private cd: ChangeDetectorRef) {
    this.context = (this.cd as EmbeddedViewRef<C>).context;
  }

  transform(param: unknown, fn, ...params) {
    return fn.apply(this.context, [param, ...params]);
  }
}
