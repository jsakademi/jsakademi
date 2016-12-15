/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { YoutubeSafeUrlPipe } from './youtube-safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { DomSanitizerImpl } from '@angular/platform-browser/src/security/dom_sanitization_service';

describe('Pipe: YoutubeSafeUrl', () => {
  it('create an instance', () => {
    let sanitizer = new DomSanitizerImpl();
    let pipe = new YoutubeSafeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
